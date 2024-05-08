import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";
import { Polly } from "@aws-sdk/client-polly";
import { getSynthesizeSpeechUrl } from "@aws-sdk/polly-request-presigner";
//import { TranscribeClient } from "@aws-sdk/client-transcribe";

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
        console.log(url);
        // Load the URL of the voice recording into the browser
        document.getElementById("translate_audio_src").src = url;
        document.getElementById("translate_audio").load();
      } catch (err) {
        console.log("Error", err);
      }
};

// Setup for transcribing audio 

let canRecord = false;
let isRecording = false;
let recorder = null;
let chunks = [];

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    console.log("Setting up audio");
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    .then(streamAudio)
    .catch(err => {
        console.error(err)
    });
}


function streamAudio(stream) {
    recorder = new MediaRecorder(stream);

    recorder.ondataavailable = e => {
        chunks.push(e.data);
    }

    recorder.onstop = e => {
        const blob = new Blob(chunks, {type: "audio/ogg; codecs=opus"})
        chunks = [];
        const audioURL = window.URL.createObjectURL(blob);
        // send audio to transcribe client
        // Testing block
        document.getElementById("translate_audio_src").src = audioURL;
        document.getElementById("translate_audio").load();
        // Testing block
    }
    canRecord = true;
}

const transcribeAudio = async () => {
    if (!canRecord) return;

    isRecording = !isRecording;

    if (isRecording){
        recorder.start();
        // toggle button color
    } else {
        recorder.stop();
        // toggle button color
    }

};

window.translateText = translateText;
window.transcribeAudio = transcribeAudio;