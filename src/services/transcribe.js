import { TranscribeClient, StartTranscriptionJobCommand, GetTranscriptionJobCommand } from "@aws-sdk/client-transcribe";
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { awsConfig } from "./awsClients";

const transcribeClient = new TranscribeClient(awsConfig);
const s3Client = new S3Client(awsConfig);

export const uploadAudioToS3 = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const params = {
        Bucket: "mtbtraveler-transcribeaudio",
        Key: "transcribeAudio.ogg",
        Body: new Uint8Array(arrayBuffer),
        ContentType: "audio/ogg"
    };

    try {
        await s3Client.send(new PutObjectCommand(params));
        return `s3://${params.Bucket}/${params.Key}`;
    } catch (err) {
        throw err;
    }
};

export const startTranscription = async (audioUri, langCode) => {
const command = new StartTranscriptionJobCommand({
    TranscriptionJobName: `TranscriptionJob-${Date.now()}`,
    LanguageCode: langCode,
    MediaFormat: "ogg",
    Media: { MediaFileUri: audioUri },
    OutputBucketName: "mtbtraveler-transcribeaudio",
    OutputKey: "transcribeTranscript.json"
});
const response = await transcribeClient.send(command);
return response.TranscriptionJob.TranscriptionJobName;
};

export const pollTranscriptionResult = (jobName, onComplete) => {
const params = {
    Bucket: "mtbtraveler-transcribeaudio",
    Key: "transcribeTranscript.json"
};

const interval = setInterval(async () => {
    const jobStatusRes = await transcribeClient.send(
    new GetTranscriptionJobCommand({ TranscriptionJobName: jobName })
    );

    const job = jobStatusRes.TranscriptionJob;

    if (job.TranscriptionJobStatus === "COMPLETED") {
        clearInterval(interval);
        const response = await s3Client.send(new GetObjectCommand(params));
        const body = await response.Body.transformToString();
        const transcript = JSON.parse(body).results.transcripts[0].transcript;
        onComplete(transcript);
    }

    if (job.TranscriptionJobStatus === "FAILED") {
        clearInterval(interval);
        alert("Transcription failed.");
    }
}, 5000);
};
