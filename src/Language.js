import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";
import { Polly } from "@aws-sdk/client-polly";
import { getSynthesizeSpeechUrl } from "@aws-sdk/polly-request-presigner";
import { TranscribeClient, StartTranscriptionJobCommand, GetTranscriptionJobCommand } from "@aws-sdk/client-transcribe";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

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

        const file = new File([blob], "transcribeAudio.ogg", {type: blob.type});
        uploadS3(file);
        //transcribeAudio(file);
    }
    canRecord = true;
}

const recordAudio = async () => {
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

const uploadS3 = async (file) => {
    console.log("Uploading file to S3: ", file);
    const s3Client = new S3Client({
        region: "us-east-1",
        credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({region: "us-east-1"}),
            identityPoolId: "us-east-1:891d8d0f-1caf-4b14-81f7-71114388deb6"
        }),
    });

    const params = {
        Bucket: "mtbtraveler-transcribeaudio",
        Key: "transcribeAudio.ogg",
        Body: file,
        ContentType: "audio/ogg"
    };

    try {
        await s3Client.send(new PutObjectCommand(params));
        const audioFileUri = `s3://${params.Bucket}/${params.Key}`;
        console.log("Successfully uploaded file to s3", audioFileUri);
        transcribeAudio(audioFileUri);
    } catch (err) {
        console.error("Error uploading file to S3 ", err)
    }
}

const transcribeAudio = async (audioFile) => { 
    const transcribeClient = new TranscribeClient({
        region: "us-east-1",
        credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({region: "us-east-1"}),
            identityPoolId: "us-east-1:891d8d0f-1caf-4b14-81f7-71114388deb6"
        }),
    });

    const params = {
        LanguageCode: 'en-US',
        Media: {
            MediaFileUri: audioFile
        },
        MediaFormat: "ogg",
        TranscriptionJobName: 'TranscriptionJob-' + Date.now()
    };

    try {
        const startTranscriptionJobCommand = new StartTranscriptionJobCommand(params);
        const data = await transcribeClient.send(startTranscriptionJobCommand);
        console.log('Transcription Job Response:', data);
        pollTranscriptionJob(data.TranscriptionJob.TranscriptionJobName);
    } catch (err) {
        console.error('Error:', err);
        alert('An error occurred while transcribing the audio.');
    }
}

async function pollTranscriptionJob(jobName) {
    const transcribeClient = new TranscribeClient({
        region: "us-east-1",
        credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({region: "us-east-1"}),
            identityPoolId: "us-east-1:891d8d0f-1caf-4b14-81f7-71114388deb6"
        }),
    });

    const interval = setInterval(async function() {
        try {
            console.log(jobName);
            const input = {
                TranscriptionJobName: jobName
            }
            const getTranscriptionJobCommand = new GetTranscriptionJobCommand(input);
            const data = await transcribeClient.send(getTranscriptionJobCommand);
            console.log("Get data", data);
            console.log('Transcription Job Status:', data.TranscriptionJob.TranscriptionJobStatus);
            if (data.TranscriptionJob.TranscriptionJobStatus === 'COMPLETED') {
                clearInterval(interval);
                const transcriptionResultUri = data.TranscriptionJob.Transcript.TranscriptFileUri;
                const response = await fetch(transcriptionResultUri);
                const json = await response.json();
                document.getElementById('input_text').value = json.results.transcripts[0].transcript;
            } else if (data.TranscriptionJob.TranscriptionJobStatus === 'FAILED') {
                clearInterval(interval);
                alert('Transcription job failed.');
            }
        } catch (err) {
            console.error('Error:', err);
            clearInterval(interval);
            alert('An error occurred while getting the transcription job status.');
        }
    }, 5000); // Poll every 5 seconds
}

window.translateText = translateText;
window.transcribeAudio = recordAudio;