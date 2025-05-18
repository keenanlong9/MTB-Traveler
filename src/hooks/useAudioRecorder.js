import { useRef, useState } from "react";
import { TranscribeStreamingClient, StartStreamTranscriptionCommand } from '@aws-sdk/client-transcribe-streaming';
import { awsConfig } from "../services/awsClients";
import { Buffer } from "buffer";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export default function useAudioRecorder(transcriptionCallback) {
  const [isRecording, setIsRecording] = useState(false);
  const audioContextRef = useRef(null);
  const micStreamRef = useRef(null);
  const workletNodeRef = useRef(null);
  const abortControllerRef = useRef(null);
  const isStreamingRef = useRef(false); 
  const audioQueueRef = useRef([]);
  const transcribeDoneRef = useRef(false);
  const lastTranscriptTimeRef = useRef(null);

  const appendLog = (msg) => {
    console.log(msg);
  };

  const startRecording = async () => {
    if (abortControllerRef.current) {
      console.warn("Attempted to start while already recording. Cleaning up first.");
      stopRecording();
      await new Promise(res => setTimeout(res, 500)); // wait briefly for cleanup
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          sampleRate: 16000,
          sampleSize: 16,
        },
      });
      appendLog("🎙️ Microphone access granted.");

      const audioContext = new AudioContext({ sampleRate: 16000 });
      audioContextRef.current = audioContext;
      micStreamRef.current = stream;

      await audioContext.audioWorklet.addModule("/pcm-processor.js");
      appendLog("⚡️ AudioWorklet module loaded.");

      const source = audioContext.createMediaStreamSource(stream);
      const pcmNode = new AudioWorkletNode(audioContext, "pcm-processor");
      workletNodeRef.current = pcmNode;

      source.connect(pcmNode);
      pcmNode.connect(audioContext.destination);

      audioQueueRef.current = [];
      isStreamingRef.current = true;

      pcmNode.port.onmessage = (event) => {
        const chunk = event.data;
        if (chunk instanceof ArrayBuffer) {
            const uint8 = new Uint8Array(chunk);
            audioQueueRef.current.push(uint8);
        }  
    }            

    async function* audioStreamGenerator() {
        while (true) {
          const chunk = audioQueueRef.current.shift();
          if (chunk === null) break;
          if (chunk) yield { AudioEvent: { AudioChunk: Buffer.from(chunk) } };
          else await new Promise(r => setTimeout(r, 20));
        }
      }      

      const client = new TranscribeStreamingClient(awsConfig);
      const command = new StartStreamTranscriptionCommand({
        LanguageCode: "en-US",//Todo: is there an auto for this?
        MediaEncoding: "pcm",
        MediaSampleRateHertz: 16000,
        AudioStream: audioStreamGenerator(),
      });

      abortControllerRef.current = new AbortController();

      appendLog("📡 Connecting to AWS Transcribe...");
      const response = await client.send(command, {
        abortSignal: abortControllerRef.current.signal,
      });
      appendLog("✅ Streaming started");

      appendLog("📬 Waiting for transcript events...");
      for await (const event of response.TranscriptResultStream) {
        appendLog("📨 Got event from AWS: " + JSON.stringify(event));
      
        const results = event.TranscriptEvent?.Transcript?.Results || [];
        for (const result of results) {
          if (!result.Alternatives?.length) continue;
          const transcript = result.Alternatives[0].Transcript;
          if (transcript && transcript.trim() !== "") {
            appendLog(`${result.IsPartial ? "🟡 Partial" : "✅ Final"}: ${transcript}`);
            transcriptionCallback(transcript);
            lastTranscriptTimeRef.current = Date.now();
      
            if (!result.IsPartial) {
              // Only mark done after a final result
              transcribeDoneRef.current = true;
            }
          }
        }
      }
      
      
      transcribeDoneRef.current = true;
      appendLog("✅ Transcription ended.");
    } catch (err) {
      appendLog("❌ Error: " + err.name + ": " + err.message);
      console.error("Transcribe error:", err);
    }
  };

  const stopRecording = async () => {
    appendLog("🛑 Stopping test...");
    await sleep(3000);
    isStreamingRef.current = false;
    audioQueueRef.current.push(null); // Stop the audio generator
  
    // ⏳ Wait for final transcript, or timeout if no update for 1–2 sec
    const maxTotalWait = 3000;
    const silenceTimeout = 1500;
    const start = Date.now();
  
    while (true) {
      const now = Date.now();
      const timeSinceLastTranscript = now - (lastTranscriptTimeRef.current ?? 0);
      const totalWait = now - start;
  
      if (transcribeDoneRef.current) {
        appendLog("✅ Final transcript received. Proceeding to stop.");
        break;
      }
      if (totalWait > maxTotalWait || timeSinceLastTranscript > silenceTimeout) {
        appendLog("⚠️ No final transcript received. Timeout hit.");
        break;
      }
  
      await new Promise((res) => setTimeout(res, 100));
    }
  
    if (abortControllerRef.current) abortControllerRef.current.abort();
    if (workletNodeRef.current) workletNodeRef.current.disconnect();
    if (micStreamRef.current)
      micStreamRef.current.getTracks().forEach((t) => t.stop());
    if (audioContextRef.current) await audioContextRef.current.close();
  };

  const toggleRecording = async () => {
    if (isRecording) {
      setIsRecording(false);
      stopRecording();
    } else {
      setIsRecording(true);
      await startRecording();
    }
  };

return { toggleRecording, isRecording };
}
