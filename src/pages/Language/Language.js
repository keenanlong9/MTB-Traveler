import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { useRef, useState } from "react";
import { translateText } from "../../services/translate";
import { synthesizeSpeechUrl } from "../../services/polly";
import { uploadAudioToS3, startTranscription, pollTranscriptionResult } from "../../services/transcribe";
import useAudioRecorder from "../../hooks/useAudioRecorder";
import { convertLanguageCode } from "../../utils/languageUtils";
import "./Language.css"

export default function Language () {
    const inputRef = useRef(null);
    const outputRef = useRef(null);
    const audioRef = useRef(null);
    const audioSrcRef = useRef(null);
    const [outputLang, setOutputLang] = useState("fr");
  
    const { toggleRecording, isRecording } = useAudioRecorder(async (file) => {
        const uri = await uploadAudioToS3(file);
        const jobName = await startTranscription(uri, convertLanguageCode(outputLang));
        pollTranscriptionResult(jobName, (text) => {
        inputRef.current.value = text;
        });
    });
  
    const handleTranslate = async () => {
        const inputText = inputRef.current.value;
        try {
        const translated = await translateText(inputText, outputLang);
        outputRef.current.value = translated;
        const url = await synthesizeSpeechUrl(translated, outputLang);
        audioSrcRef.current.src = url;
        audioRef.current.load();
        } catch (err) {
        console.error("Translate error:", err);
        outputRef.current.value = "Error translating text.";
        }
    };

    return (
        <div>
            <NavBar></NavBar>
            <div className="language_translator">
            <h1>Communicate with Locals</h1>
            <div className="language_translator_btns">
                <button
                    className="language_translator_btn"
                    id="transcribe_btn"
                    onClick={toggleRecording}
                >
                <p>{isRecording ? "Stop Recording" : "Voice Input"}</p>
                </button>
                <button
                    className="language_translator_btn"
                    id="translate_btn"
                    onClick={handleTranslate}
                >
                <p>Translate</p>
                </button>
                <div className="language_translator_voice_output">
                <audio id="translate_audio" controls ref={audioRef}>
                    <source id="translate_audio_src" type="audio/mp3" ref={audioSrcRef} />
                </audio>
                </div>
            </div>
            <div className="language_translator_selections">
                <select
                    className="language_translator_selection"
                    name="output_language"
                    id="output_language"
                    value={outputLang}
                    onChange={(e) => setOutputLang(e.target.value)}
                >
                <option value="fr">French</option>
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="es-MX">Spanish</option>
                </select>
            </div>
            <div className="language_translator_textbox">
                <textarea
                    name="input_text"
                    id="input_text"
                    placeholder="Text Input"
                    ref={inputRef}
                ></textarea>
                <textarea
                    name="output_text"
                    id="output_text"
                    placeholder="Text Output"
                    ref={outputRef}
                    disabled
                ></textarea>
            </div>
            </div>
            <Footer></Footer>
        </div>
    )
}