import { useRef, useState } from "react";

export default function useAudioRecorder(onStopCallback) {
  const [isRecording, setIsRecording] = useState(false);
  const chunksRef = useRef([]);
  const recorderRef = useRef(null);

  const startRecorder = async () => {
    if (!navigator.mediaDevices) return;

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorderRef.current = new MediaRecorder(stream);

    recorderRef.current.ondataavailable = (e) => {
      chunksRef.current.push(e.data);
    };

    recorderRef.current.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "audio/ogg; codecs=opus" });
      const file = new File([blob], "transcribeAudio.ogg", { type: blob.type });
      chunksRef.current = [];
      onStopCallback(file);
    };
  };

  const toggleRecording = async () => {
    if (!recorderRef.current) await startRecorder();

    if (isRecording) {
      recorderRef.current.stop();
    } else {
      recorderRef.current.start();
    }
    setIsRecording(!isRecording);
  };

  return { toggleRecording, isRecording };
}
