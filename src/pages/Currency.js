import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Currency () {
    return (
        <div>
            <NavBar></NavBar>
            <div className="currency">
            <div className="currency_card">
                {/* <!-- TODO make location dynamic--> */}
                <p>Whistler, Britsh Columbia</p>
            </div>
            <h1>Convert Your Currency</h1>
            <div className="input_output_currency">
                <div className="input_currency">
                <input
                    type="text"
                    name="input_currency_num"
                    id="input_currency_num"
                    placeholder="100"
                />
                <select name="input_currency_type" id="input_currency_type">
                    <option value="USD">$USD</option>
                    <option value="EUR">$EUR</option>
                    <option value="CAD">$CAD</option>
                    <option value="JMD">$JMD</option>
                    <option value="MXN">$MXN</option>
                    <option value="ZAR">$ZAR</option>
                    <option value="AUD">$AUD</option>
                    <option value="NZD">$NZD</option>
                    <option value="CHF">$CHF</option>
                </select>
                </div>
                <div className="output_currency">
                <input
                    type="text"
                    name="output_currency_num"
                    id="output_currency_num"
                    placeholder="93.75"
                    disabled
                />
                <select name="output_currency_type" id="output_currency_type">
                    <option value="EUR">$EUR</option>
                    <option value="CAD">$CAD</option>
                    <option value="JMD">$JMD</option>
                    <option value="MXN">$MXN</option>
                    <option value="ZAR">$ZAR</option>
                    <option value="AUD">$AUD</option>
                    <option value="USD">$USD</option>
                    <option value="NZD">$NZD</option>
                    <option value="CHF">$CHF</option>
                </select>
                </div>
                <button className="convert_btn" onclick="convertCurrency()">
                <p>Convert</p>
                </button>
            </div>
            </div>
            <Footer></Footer>
        </div>
    )
}