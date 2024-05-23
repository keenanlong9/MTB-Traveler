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
            outputCurrency.value = inputCurrency * 1.0;
            break;
        case "CAD":
            outputCurrency.value = inputCurrency * 1.36;
            break;
        case "EUR":
            outputCurrency.value = inputCurrency * 0.92;
            break;
        case "JMD":
            outputCurrency.value = inputCurrency * 155.24;
            break;
        case "MXN":
            outputCurrency.value = inputCurrency * 16.61;
            break;
        case "ZAR":
            outputCurrency.value = inputCurrency * 18.18;
            break;
        case "AUD":
            outputCurrency.value = inputCurrency * 1.49;
            break;
        case "NZD":
            outputCurrency.value = inputCurrency * 1.63;
            break;
        case "CHF":
            outputCurrency.value = inputCurrency * 0.91;
            break; 
    }
}

function CADCurrency(inputCurrency, outputCurrency, outputCurrencyType) {
    switch (outputCurrencyType) {
        case "USD":
            outputCurrency.value = inputCurrency * 0.73;
            break;
        case "CAD":
            outputCurrency.value = inputCurrency * 1.0;
            break;
        case "EUR":
            outputCurrency.value = inputCurrency * 0.68;
            break;
        case "JMD":
            outputCurrency.value = inputCurrency * 114.0;
            break;
        case "MXN":
            outputCurrency.value = inputCurrency * 12.20;
            break;
        case "ZAR":
            outputCurrency.value = inputCurrency * 13.35;
            break;
        case "AUD":
            outputCurrency.value = inputCurrency * 1.10;
            break; 
        case "NZD":
            outputCurrency.value = inputCurrency * 1.20;
            break;
        case "CHF":
            outputCurrency.value = inputCurrency * 0.67;
            break; 
    }
}

function EURCurrency(inputCurrency, outputCurrency, outputCurrencyType) {
    switch (outputCurrencyType) {
        case "USD":
            outputCurrency.value = inputCurrency * 1.09;
            break;
        case "CAD":
            outputCurrency.value = inputCurrency * 1.48;
            break;
        case "EUR":
            outputCurrency.value = inputCurrency * 1.0;
            break;
        case "JMD":
            outputCurrency.value = inputCurrency * 169.06;
            break;
        case "MXN":
            outputCurrency.value = inputCurrency * 18.03;
            break;
        case "ZAR":
            outputCurrency.value = inputCurrency * 19.76;
            break;
        case "AUD":
            outputCurrency.value = inputCurrency * 1.63;
            break; 
        case "NZD":
            outputCurrency.value = inputCurrency * 1.77;
            break;
        case "CHF":
            outputCurrency.value = inputCurrency * 0.99;
            break;
    }
}

function JMDCurrency(inputCurrency, outputCurrency, outputCurrencyType) {
    switch (outputCurrencyType) {
        case "USD":
            outputCurrency.value = inputCurrency * 0.0064;
            break;
        case "CAD":
            outputCurrency.value = inputCurrency * 0.0088;
            break;
        case "EUR":
            outputCurrency.value = inputCurrency * 0.0059;
            break;
        case "JMD":
            outputCurrency.value = inputCurrency * 1.0;
            break;
        case "MXN":
            outputCurrency.value = inputCurrency * 0.11;
            break;
        case "ZAR":
            outputCurrency.value = inputCurrency * 0.12;
            break;
        case "AUD":
            outputCurrency.value = inputCurrency * 0.0096;
            break; 
        case "NZD":
            outputCurrency.value = inputCurrency * 0.011;
            break;
        case "CHF":
            outputCurrency.value = inputCurrency * 0.0059;
            break;
    }
}

function MXNCurrency(inputCurrency, outputCurrency, outputCurrencyType) {
    switch (outputCurrencyType) {
        case "USD":
            outputCurrency.value = inputCurrency * 0.060;
            break;
        case "CAD":
            outputCurrency.value = inputCurrency * 0.082;
            break;
        case "EUR":
            outputCurrency.value = inputCurrency * 0.055;
            break;
        case "JMD":
            outputCurrency.value = inputCurrency * 9.35;
            break;
        case "MXN":
            outputCurrency.value = inputCurrency * 1.0;
            break;
        case "ZAR":
            outputCurrency.value = inputCurrency * 1.09;
            break;
        case "AUD":
            outputCurrency.value = inputCurrency * 0.090;
            break;
        case "NZD":
            outputCurrency.value = inputCurrency * 0.098;
            break;
        case "CHF":
            outputCurrency.value = inputCurrency * 0.055;
            break;
    }
}

function ZARCurrency(inputCurrency, outputCurrency, outputCurrencyType) {
    switch (outputCurrencyType) {
        case "USD":
            outputCurrency.value = inputCurrency * 0.055;
            break;
        case "CAD":
            outputCurrency.value = inputCurrency * 0.075;
            break;
        case "EUR":
            outputCurrency.value = inputCurrency * 0.051;
            break;
        case "JMD":
            outputCurrency.value = inputCurrency * 8.54;
            break;
        case "MXN":
            outputCurrency.value = inputCurrency * 0.91;
            break;
        case "ZAR":
            outputCurrency.value = inputCurrency * 1.0;
            break;
        case "AUD":
            outputCurrency.value = inputCurrency * 0.082;
            break;
        case "NZD":
            outputCurrency.value = inputCurrency * 0.090;
            break;
        case "CHF":
            outputCurrency.value = inputCurrency * 0.050;
            break;
    }
}

function AUDCurrency(inputCurrency, outputCurrency, outputCurrencyType) {
    switch (outputCurrencyType) {
        case "USD":
            outputCurrency.value = inputCurrency * 0.67;
            break;
        case "CAD":
            outputCurrency.value = inputCurrency * 0.91;
            break;
        case "EUR":
            outputCurrency.value = inputCurrency * 0.61;
            break;
        case "JMD":
            outputCurrency.value = inputCurrency * 104.03;
            break;
        case "MXN":
            outputCurrency.value = inputCurrency * 11.13;
            break;
        case "ZAR":
            outputCurrency.value = inputCurrency * 12.17;
            break;
        case "AUD":
            outputCurrency.value = inputCurrency * 1.0;
            break; 
        case "NZD":
            outputCurrency.value = inputCurrency * 1.09;
            break;
        case "CHF":
            outputCurrency.value = inputCurrency * 0.61;
            break;
    }
}

function NZDCurrency(inputCurrency, outputCurrency, outputCurrencyType) {
    switch (outputCurrencyType) {
        case "USD":
            outputCurrency.value = inputCurrency * 0.61;
            break;
        case "CAD":
            outputCurrency.value = inputCurrency * 0.83;
            break;
        case "EUR":
            outputCurrency.value = inputCurrency * 0.56;
            break;
        case "JMD":
            outputCurrency.value = inputCurrency * 95.20;
            break;
        case "MXN":
            outputCurrency.value = inputCurrency * 10.18;
            break;
        case "ZAR":
            outputCurrency.value = inputCurrency * 11.15;
            break;
        case "AUD":
            outputCurrency.value = inputCurrency * 0.92;
            break;
        case "NZD":
            outputCurrency.value = inputCurrency * 1.0;
            break;
        case "CHF":
            outputCurrency.value = inputCurrency * 0.56;
            break;
    }
}

function CHFCurrency(inputCurrency, outputCurrency, outputCurrencyType) {
    switch (outputCurrencyType) {
        case "USD":
            outputCurrency.value = inputCurrency * 1.10;
            break;
        case "CAD":
            outputCurrency.value = inputCurrency * 1.50;
            break;
        case "EUR":
            outputCurrency.value = inputCurrency * 1.01;
            break;
        case "JMD":
            outputCurrency.value = inputCurrency * 170.77;
            break;
        case "MXN":
            outputCurrency.value = inputCurrency * 18.27;
            break;
        case "ZAR":
            outputCurrency.value = inputCurrency * 20.00;
            break;
        case "AUD":
            outputCurrency.value = inputCurrency * 1.64;
            break; 
        case "NZD":
            outputCurrency.value = inputCurrency * 1.79;
            break;
        case "CHF":
            outputCurrency.value = inputCurrency * 1.0;
            break;
    }
}

window.convertCurrency = convertCurrency;