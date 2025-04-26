import { TranscribeClient, StartTranscriptionJobCommand, GetTranscriptionJobCommand } from "@aws-sdk/client-transcribe";
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { awsConfig } from "./awsClients";

const transcribeClient = new TranscribeClient(awsConfig);
const s3Client = new S3Client(awsConfig);

export const uploadAudioToS3 = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    console.log("Upload Debug 1")
const params = {
    Bucket: "mtbtraveler-transcribeaudio",
    Key: "transcribeAudio.ogg",
    Body: new Uint8Array(arrayBuffer),
    ContentType: "audio/ogg"
};
console.log("Upload Debug 2")
console.log("Upload Debug 1.5", s3Client); // should not be undefined
try {
    await s3Client.send(new PutObjectCommand(params));
    console.log("Upload Debug 3");
    return `s3://${params.Bucket}/${params.Key}`;
  } catch (err) {
    console.error("Upload failed:", err);
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

// const streamToString = async (stream) => {
//     const blob = await new Response(stream).blob();
//     return await blob.text();
//   };

const interval = setInterval(async () => {
    const jobStatusRes = await transcribeClient.send(
    new GetTranscriptionJobCommand({ TranscriptionJobName: jobName })
    );

    const job = jobStatusRes.TranscriptionJob;

    if (job.TranscriptionJobStatus === "COMPLETED") {
    clearInterval(interval);
    const response = await s3Client.send(new GetObjectCommand(params));
    console.log("Body:", response.Body);
    console.log("Typeof body:", typeof response.Body);
    console.log("Instanceof Blob:", response.Body instanceof Blob);
    console.log("Has transformToString:", typeof response.Body?.transformToString === "function");

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
