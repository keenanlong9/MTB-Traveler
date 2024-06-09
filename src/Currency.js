const convertCurrency = async () => {
    const inputCurrency = document.getElementById("input_currency_num").value;
    const outputCurrency = document.getElementById("output_currency_num");
    const inputCurrencyType = document.getElementById("input_currency_type").value;
    const outputCurrencyType = document.getElementById("output_currency_type").value;

    switch (inputCurrencyType) {
        case "USD":
            USDCurrency(inputCurrency, outputCurrency, outputCurrencyType);
            break;
        case "CAD":
            CADCurrency(inputCurrency, outputCurrency, outputCurrencyType);
            break;
        case "EUR":
            EURCurrency(inputCurrency, outputCurrency, outputCurrencyType);
            break;
        case "JMD":
            JMDCurrency(inputCurrency, outputCurrency, outputCurrencyType);
            break;
        case "MXN":
            MXNCurrency(inputCurrency, outputCurrency, outputCurrencyType);
            break;
        case "ZAR":
            ZARCurrency(inputCurrency, outputCurrency, outputCurrencyType);
            break;
        case "AUD":
            AUDCurrency(inputCurrency, outputCurrency, outputCurrencyType);
            break;
        case "NZD":
            NZDCurrency(inputCurrency, outputCurrency, outputCurrencyType);
            break;
        case "CHF":
            CHFCurrency(inputCurrency, outputCurrency, outputCurrencyType);
            break;
    }
}

function USDCurrency(inputCurrency, outputCurrency, outputCurrencyType) {
    switch (outputCurrencyType) {
        case "USD":
            convertedCurrency = inputCurrency * 1.0;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CAD":
            convertedCurrency = inputCurrency * 1.36;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "EUR":
            convertedCurrency = inputCurrency * 0.92;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "JMD":
            convertedCurrency = inputCurrency * 155.24;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "MXN":
            convertedCurrency = inputCurrency * 16.61;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "ZAR":
            convertedCurrency = inputCurrency * 18.18;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "AUD":
            convertedCurrency = inputCurrency * 1.49;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "NZD":
            convertedCurrency = inputCurrency * 1.63;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CHF":
            convertedCurrency = inputCurrency * 0.91;
            outputCurrency.value = roundNumber(convertedCurrency);
            break; 
    }
}

function CADCurrency(inputCurrency, outputCurrency, outputCurrencyType) {
    switch (outputCurrencyType) {
        case "USD":
            convertedCurrency = inputCurrency * 0.73;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CAD":
            convertedCurrency = inputCurrency * 1.0;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "EUR":
            convertedCurrency = inputCurrency * 0.68;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "JMD":
            convertedCurrency = inputCurrency * 114.0;
            outputCurrency.value = roundNumber(convertedCurrency);
            break; 
        case "MXN":
            convertedCurrency = inputCurrency * 12.20;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "ZAR":
            convertedCurrency = inputCurrency * 13.35;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "AUD":
            convertedCurrency = inputCurrency * 1.10;
            outputCurrency.value = roundNumber(convertedCurrency);
            break; 
        case "NZD":
            convertedCurrency = inputCurrency * 1.20;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CHF":
            convertedCurrency = inputCurrency * 0.67;
            outputCurrency.value = roundNumber(convertedCurrency);
            break; 
    }
}

function EURCurrency(inputCurrency, outputCurrency, outputCurrencyType) {
    switch (outputCurrencyType) {
        case "USD":
            convertedCurrency = inputCurrency * 1.09;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CAD":
            convertedCurrency = inputCurrency * 1.48;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "EUR":
            convertedCurrency = inputCurrency * 1.0;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "JMD":
            convertedCurrency = inputCurrency * 169.06;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "MXN":
            convertedCurrency = inputCurrency * 18.03;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "ZAR":
            convertedCurrency = inputCurrency * 19.76;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "AUD":
            convertedCurrency = inputCurrency * 1.63;
            outputCurrency.value = roundNumber(convertedCurrency);
            break; 
        case "NZD":
            convertedCurrency = inputCurrency * 1.77;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CHF":
            convertedCurrency = inputCurrency * 0.99;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
    }
}

function JMDCurrency(inputCurrency, outputCurrency, outputCurrencyType) {
    switch (outputCurrencyType) {
        case "USD":
            convertedCurrency = inputCurrency * 0.0064;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CAD":
            convertedCurrency = inputCurrency * 0.0088;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "EUR":
            convertedCurrency = inputCurrency * 0.0059;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "JMD":
            convertedCurrency = inputCurrency * 1.0;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "MXN":
            convertedCurrency = inputCurrency * 0.11;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "ZAR":
            convertedCurrency = inputCurrency * 0.12;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "AUD":
            convertedCurrency = inputCurrency * 0.0096;
            outputCurrency.value = roundNumber(convertedCurrency);
            break; 
        case "NZD":
            convertedCurrency = inputCurrency * 0.011;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CHF":
            convertedCurrency = inputCurrency * 0.0059;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
    }
}

function MXNCurrency(inputCurrency, outputCurrency, outputCurrencyType) {
    switch (outputCurrencyType) {
        case "USD":
            convertedCurrency = inputCurrency * 0.060;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CAD":
            convertedCurrency = inputCurrency * 0.082;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "EUR":
            convertedCurrency = inputCurrency * 0.055;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "JMD":
            convertedCurrency = inputCurrency * 9.35;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "MXN":
            convertedCurrency = inputCurrency * 1.0;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "ZAR":
            convertedCurrency = inputCurrency * 1.09;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "AUD":
            convertedCurrency = inputCurrency * 0.090;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "NZD":
            convertedCurrency = inputCurrency * 0.098;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CHF":
            convertedCurrency = inputCurrency * 0.055;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
    }
}

function ZARCurrency(inputCurrency, outputCurrency, outputCurrencyType) {
    switch (outputCurrencyType) {
        case "USD":
            convertedCurrency = inputCurrency * 0.055;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CAD":
            convertedCurrency = inputCurrency * 0.075;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "EUR":
            convertedCurrency = inputCurrency * 0.051;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "JMD":
            convertedCurrency = inputCurrency * 8.54;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "MXN":
            convertedCurrency = inputCurrency * 0.91;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "ZAR":
            convertedCurrency = inputCurrency * 1.0;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "AUD":
            convertedCurrency = inputCurrency * 0.082;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "NZD":
            convertedCurrency = inputCurrency * 0.090;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CHF":
            convertedCurrency = inputCurrency * 0.050;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
    }
}

function AUDCurrency(inputCurrency, outputCurrency, outputCurrencyType) {
    switch (outputCurrencyType) {
        case "USD":
            convertedCurrency = inputCurrency * 0.67;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CAD":
            convertedCurrency = inputCurrency * 0.91;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "EUR":
            convertedCurrency = inputCurrency * 0.61;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "JMD":
            convertedCurrency = inputCurrency * 104.03;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "MXN":
            convertedCurrency = inputCurrency * 11.13;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "ZAR":
            convertedCurrency = inputCurrency * 12.17;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "AUD":
            convertedCurrency = inputCurrency * 1.0;
            outputCurrency.value = roundNumber(convertedCurrency);
            break; 
        case "NZD":
            convertedCurrency = inputCurrency * 1.09;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CHF":
            convertedCurrency = inputCurrency * 0.61;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
    }
}

function NZDCurrency(inputCurrency, outputCurrency, outputCurrencyType) {
    switch (outputCurrencyType) {
        case "USD":
            convertedCurrency = inputCurrency * 0.61;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CAD":
            convertedCurrency = inputCurrency * 0.83;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "EUR":
            convertedCurrency = inputCurrency * 0.56;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "JMD":
            convertedCurrency = inputCurrency * 95.20;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "MXN":
            convertedCurrency = inputCurrency * 10.18;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "ZAR":
            convertedCurrency = inputCurrency * 11.15;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "AUD":
            convertedCurrency = inputCurrency * 0.92;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "NZD":
            convertedCurrency = inputCurrency * 1.0;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CHF":
            convertedCurrency = inputCurrency * 0.56;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
    }
}

function CHFCurrency(inputCurrency, outputCurrency, outputCurrencyType) {
    switch (outputCurrencyType) {
        case "USD":
            convertedCurrency = inputCurrency * 1.10;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CAD":
            convertedCurrency = inputCurrency * 1.50;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "EUR":
            convertedCurrency = inputCurrency * 1.01;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "JMD":
            convertedCurrency = inputCurrency * 170.77;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "MXN":
            convertedCurrency = inputCurrency * 18.27;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "ZAR":
            convertedCurrency = inputCurrency * 20.00;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "AUD":
            convertedCurrency = inputCurrency * 1.64;
            outputCurrency.value = roundNumber(convertedCurrency);
            break; 
        case "NZD":
            convertedCurrency = inputCurrency * 1.79;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
        case "CHF":
            convertedCurrency = inputCurrency * 1.0;
            outputCurrency.value = roundNumber(convertedCurrency);
            break;
    }
}

function roundNumber(num){
    return Number( num.toPrecision(countNonDecimalPlaces(num)+2));
}

function countNonDecimalPlaces(num) {
    let numStr = num.toString();
    let decimalIndex = numStr.indexOf('.');
    return decimalIndex;
  }

window.convertCurrency = convertCurrency;