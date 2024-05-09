import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";
import { Polly } from "@aws-sdk/client-polly";
import { getSynthesizeSpeechUrl } from "@aws-sdk/polly-request-presigner";
//import { TranscribeClient, StartTranscriptionJobCommand } from "@aws-sdk/client-transcribe";
import { TranscribeStreamingClient , StartStreamTranscriptionCommand } from "@aws-sdk/client-transcribe-streaming";
import { MicrophoneStream } from 'microphone-stream';
import { Buffer } from 'buffer';

const translateText = async () => {
    const inputText = document.getElementById("input_text").value;
    const outputText = document.getElementById("output_text");
    const translateClient = new TranslateClient({
        region: "us-east-1",
        credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({region: "us-east-1"}),
            identityPoolId: "us-east-1:891d8d0f-1caf-4b14-81f7-71114388deb6"
        }),
    });

    const translateParams = {
        Text: inputText,
        SourceLanguageCode: "auto",
        TargetLanguageCode: "fr"
    };

    const translateTextCommand = new TranslateTextCommand(translateParams);
    try{
        const data = await translateClient.send(translateTextCommand);
        outputText.value = data.TranslatedText;
        // Send translated text to Polly for speech output
        audioTranslateText();
    } catch (error) {
        console.error("Error", error);
        outputText.value = "Error";
    }
};

const audioTranslateText = async () => {
    const pollyClient = new Polly({
        region: "us-east-1",
        credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({region: "us-east-1"}),
            identityPoolId: "us-east-1:891d8d0f-1caf-4b14-81f7-71114388deb6"
        }),
    });

    const speechParams = {
        OutputFormat: "mp3",
        Text: "",
        TextType: "text",
        VoiceId: "Matthew",
        LanguageCode: "fr-FR"
      };


      speechParams.Text = document.getElementById("output_text").value;
      try {
        let url = await getSynthesizeSpeechUrl({
          client: pollyClient,
          params: speechParams,
        });
        // Load the URL of the voice recording into the browser
        document.getElementById("translate_audio_src").src = url;
        document.getElementById("translate_audio").load();
      } catch (err) {
        console.log("Error", err);
      }
};

window.translateText = translateText;



/* Transcribe Section
const transcribeClient = new TranscribeStreamingClient({
    region: "us-east-1",
        credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({region: "us-east-1"}),
            identityPoolId: "us-east-1:891d8d0f-1caf-4b14-81f7-71114388deb6"
        }),
  });



  const mic = require("microphone-stream");
// this part should be put into an async function
micStream.setStream(
  await navigator.mediaDevices.getUserMedia({
    video: false,
    audio: true,
  })
);
const audioStream = async function* () {
  for await (const chunk of micStream) {
    yield { AudioEvent: { AudioChunk: pcmEncodeChunk(chunk) /* pcm Encoding is optional depending on the source  } };
  }
};



const pcmEncodeChunk = (chunk) => {
    const input = mic.toRaw(chunk);
    var offset = 0;
    var buffer = new ArrayBuffer(input.length * 2);
    var view = new DataView(buffer);
    for (var i = 0; i < input.length; i++, offset += 2) {
      var s = Math.max(-1, Math.min(1, input[i]));
      view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
    return Buffer.from(buffer);
};



  const command = new StartStreamTranscriptionCommand({
    // The language code for the input audio. Valid values are en-GB, en-US, es-US, fr-CA, and fr-FR
    LanguageCode: "en-US",
    // The encoding used for the input audio. The only valid value is pcm.
    MediaEncoding: "pcm",
    // The sample rate of the input audio in Hertz. We suggest that you use 8000 Hz for low-quality audio and 16000 Hz for
    // high-quality audio. The sample rate must match the sample rate in the audio file.
    MediaSampleRateHertz: 44100,
    AudioStream: audioStream(),
  });
  const response = await transcribeClient.send(command);



  // This snippet should be put into an async function
for await (const event of response.TranscriptResultStream) {
    if (event.TranscriptEvent) {
      const message = event.TranscriptEvent;
      // Get multiple possible results
      const results = event.TranscriptEvent.Transcript.Results;
      // Print all the possible transcripts
      results.map((result) => {
        (result.Alternatives || []).map((alternative) => {
          const transcript = alternative.Items.map((item) => item.Content).join(" ");
          console.log(transcript);
        });
      });
    }
  }



  const { Readable } = require("stream");
const transcriptsStream = Readable.from(response.TranscriptResultStream);
transcriptsStream.pipe(/* some destinations );*/

// Transcribe section 2
let microphoneStream = undefined;
let transcribeClient = undefined;
let transcription = "";
//let canRecord = false;
let isRecording = false;
const SAMPLE_RATE = 44100;

const recordVoice = async () => {
    //if (!canRecord) return;

    isRecording = !isRecording;

    if (isRecording){
        await startRecording((text) => {
            transcription += text;
            console.log(transcription);
            document.getElementById("input_text").value = transcription;
        })
    } else {
        if (microphoneStream) {
            microphoneStream.stop();
            microphoneStream.destroy();
            microphoneStream = undefined;
        }
    }

};

const createTranscribeClient = () => {
  transcribeClient = new TranscribeStreamingClient({
    region: "us-east-1",
        credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({region: "us-east-1"}),
            identityPoolId: "us-east-1:891d8d0f-1caf-4b14-81f7-71114388deb6"
        }),
  });
}

const createMicrophoneStream = async () => {
  microphoneStream = new MicrophoneStream();
  microphoneStream.setStream(
    await window.navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true,
    })
  );
};

const startStreaming = async (callback) => {
  const command = new StartStreamTranscriptionCommand({
    LanguageCode: "auto", // try en-US if this doesn't work
    MediaEncoding: "pcm",
    MediaSampleRateHertz: SAMPLE_RATE,
    AudioStream: getAudioStream(),
    });

    const data = await transcribeClient.send(command);
    for await (const event of data.TranscriptResultStream) {
    const results = event.TranscriptEvent.Transcript.Results;
    if (results.length && !results[0]?.IsPartial) {
        const newTranscript = results[0].Alternatives[0].Transcript;
        console.log(newTranscript); // delete later
        callback(newTranscript + " ");
    }
    }
};

const startRecording = async (callback) => {
    createTranscribeClient();
    createMicrophoneStream();

    await startStreaming(callback);
}

const getAudioStream = async function* () {
    for await (const chunk of microphoneStream) {
        if (chunk.length <= SAMPLE_RATE) {
        yield {
            AudioEvent: {
            AudioChunk: encodePCMChunk(chunk),
            },
        };
        }
    }
};

const encodePCMChunk = (chunk) => {
    const input = MicrophoneStream.toRaw(chunk);
    let offset = 0;
    const buffer = new ArrayBuffer(input.length * 2);
    const view = new DataView(buffer);
    for (let i = 0; i < input.length; i++, offset += 2) {
        let s = Math.max(-1, Math.min(1, input[i]));
        view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
    return Buffer.from(buffer);
};

window.recordVoice = recordVoice;
/*const startStreaming = async (callback) => {

}*/