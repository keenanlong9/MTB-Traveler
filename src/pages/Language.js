import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Language () {
    return (
        <div>
            <NavBar></NavBar>
            <div className="language_translator">
            <h1>Communicate with Locals</h1>
            <div className="language_translator_btns">
                <button
                    className="language_translator_btn"
                    id="transcribe_btn"
                    onclick="transcribeAudio()"
                >
                <p>Voice Input</p>
                </button>
                <button
                    className="language_translator_btn"
                    id="translate_btn"
                    onclick="translateText()"
                >
                <p>Translate</p>
                </button>
                <div className="language_translator_voice_output">
                <audio id="translate_audio" controls>
                    <source id="translate_audio_src" type="audio/mp3" src="" />
                </audio>
                </div>
            </div>
            <div className="language_translator_selections">
                <select
                    className="language_translator_selection"
                    name="input_language"
                    id="input_language"
                >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="es-MX">Spanish</option>
                </select>
                <select
                    className="language_translator_selection"
                    name="output_language"
                    id="output_language"
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
                ></textarea>
                <textarea
                    name="output_text"
                    id="output_text"
                    placeholder="Text Output"
                    disabled
                ></textarea>
            </div>
            </div>
            <Footer></Footer>
        </div>
    )
}