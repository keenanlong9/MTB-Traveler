import React, { useState, useEffect, useRef } from 'react';
import { TranscribeStreamingClient, StartStreamTranscriptionCommand } from '@aws-sdk/client-transcribe-streaming';

const transcribeClient = new TranscribeStreamingClient({ 
  region: 'YOUR_AWS_REGION',
  credentials: {
    accessKeyId: 'YOUR_ACCESS_KEY',
    secretAccessKey: 'YOUR_SECRET_KEY'
  }
});

function App() {
  const [transcription, setTranscription] = useState('');
  const mediaRecorder = useRef(null);

  useEffect(() => {
    async function startTranscription() {
      const stream = new MediaStream();
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch (error) {
        console.error("Error accessing microphone:", error);
        return;
      }

      mediaRecorder.current = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      mediaRecorder.current.ondataavailable = async (event) => {
        if (event.data.size > 0) {
          const audioChunk = await event.data.arrayBuffer();

          const command = new StartStreamTranscriptionCommand({
            LanguageCode: 'en-US',
            MediaEncoding: 'webm',
            MediaSampleRateHertz: 48000,
            AudioStream: async function* () {
              yield { AudioEvent: { AudioChunk: new Uint8Array(audioChunk) } };
            },
          });

          try {
            const response = await transcribeClient.send(command);
            for await (const event of response.TranscriptResultStream) {
              event.Transcript?.Results?.forEach((result) => {
                if (!result.IsPartial) {
                  setTranscription(prevTranscription => prevTranscription + result.Alternatives[0].Transcript + ' ');
                }
              });
            }
          } catch (error) {
             console.error("Error transcribing:", error);
          }
        }
      };

      mediaRecorder.current.start(1000);
    }

    startTranscription();

    return () => {
      if (mediaRecorder.current?.state === 'recording') {
        mediaRecorder.current.stop();
      }
    };
  }, []);

  return (
    <div>
      <h1>Real-time Transcription</h1>
      <p>{transcription}</p>
    </div>
  );
}

export default App;
