import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';
import "./Currency.css"

// Todo: Move this to a json file or pull from and API
const exchangeRates = {
    USD: { USD: 1.0, CAD: 1.36, EUR: 0.92, JMD: 155.24, MXN: 16.61, ZAR: 18.18, AUD: 1.49, NZD: 1.63, CHF: 0.91 },
    CAD: { USD: 0.73, CAD: 1.0, EUR: 0.68, JMD: 114.0, MXN: 12.20, ZAR: 13.35, AUD: 1.10, NZD: 1.20, CHF: 0.67 },
    EUR: { USD: 1.09, CAD: 1.48, EUR: 1.0, JMD: 169.06, MXN: 18.03, ZAR: 19.76, AUD: 1.63, NZD: 1.77, CHF: 0.99 },
    JMD: { USD: 0.0064, CAD: 0.0088, EUR: 0.0059, JMD: 1.0, MXN: 0.11, ZAR: 0.12, AUD: 0.0096, NZD: 0.011, CHF: 0.0059 },
    MXN: { USD: 0.060, CAD: 0.082, EUR: 0.055, JMD: 9.35, MXN: 1.0, ZAR: 1.09, AUD: 0.090, NZD: 0.098, CHF: 0.055 },
    ZAR: { USD: 0.055, CAD: 0.075, EUR: 0.051, JMD: 8.54, MXN: 0.91, ZAR: 1.0, AUD: 0.082, NZD: 0.090, CHF: 0.050 },
    AUD: { USD: 0.67, CAD: 0.91, EUR: 0.61, JMD: 104.03, MXN: 11.13, ZAR: 12.17, AUD: 1.0, NZD: 1.09, CHF: 0.61 },
    NZD: { USD: 0.61, CAD: 0.83, EUR: 0.56, JMD: 95.20, MXN: 10.18, ZAR: 11.15, AUD: 0.92, NZD: 1.0, CHF: 0.56 },
    CHF: { USD: 1.10, CAD: 1.50, EUR: 1.01, JMD: 170.77, MXN: 18.27, ZAR: 20.0, AUD: 1.64, NZD: 1.79, CHF: 1.0 }
  };
  
  const roundNumber = (num) => {
    return Number(num.toPrecision(countNonDecimalPlaces(num) + 2));
  };
  
  const countNonDecimalPlaces = (num) => {
    let numStr = num.toString();
    let decimalIndex = numStr.indexOf('.');
    return decimalIndex === -1 ? numStr.length : decimalIndex;
  };
  
  const currencies = Object.keys(exchangeRates);

export default function Currency () {
    const [inputValue, setInputValue] = useState('');
    const [inputCurrency, setInputCurrency] = useState('USD');
    const [outputCurrency, setOutputCurrency] = useState('EUR');
    const [convertedValue, setConvertedValue] = useState('');

    const convertCurrency = () => {
        const inputNum = parseFloat(inputValue);
        if (isNaN(inputNum)) return setConvertedValue('Invalid input');
        const rate = exchangeRates[inputCurrency][outputCurrency];
        const result = inputNum * rate;
        setConvertedValue(roundNumber(result));
    };
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
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <select name="input_currency_type" id="input_currency_type"
                        value={inputCurrency}
                        onChange={(e) => setInputCurrency(e.target.value)}>
                            {currencies.map((cur) => (
                                <option key={cur} value={cur}>${cur}</option>
                            ))}
                        </select>
                    </div>
                    <div className="output_currency">
                        <input
                            type="text"
                            name="output_currency_num"
                            id="output_currency_num"
                            placeholder="93.75"
                            value={convertedValue}
                            onChange={(e) => setConvertedValue(e.target.value)}
                            disabled
                        />
                        <select name="output_currency_type" id="output_currency_type"
                            value={outputCurrency}
                            onChange={(e) => setOutputCurrency(e.target.value)}>
                            {currencies.map((cur) => (
                                <option key={cur} value={cur}>${cur}</option>
                            ))}
                        </select>
                    </div>
                    <button className="convert_btn" onClick={convertCurrency}>
                        <p>Convert</p>
                    </button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}