const convertCurrency = async () => {
    const inputCurrnecy = document.getElementById("input_currency_num").value;
    const outputCurrnecy = document.getElementById("output_currency_num");
    const inputCurrnecyType = document.getElementById("input_currency_type").value;
    const outputCurrnecyType = document.getElementById("output_currency_type").value;

    switch (inputCurrnecyType) {
        case "USD":
            USDCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType);
            break;
        case "CAD":
            CADCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType);
            break;
        case "EUR":
            EURCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType);
            break;
        case "JMD":
            JMDCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType);
            break;
        case "MXN":
            MXNCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType);
            break;
        case "ZAR":
            ZARCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType);
            break;
        case "AUD":
            AUDCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType);
            break;
        case "NZD":
            NZDCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType);
            break;
        case "CHF":
            CHFCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType);
            break;
    }
}

function USDCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType) {
    switch (outputCurrnecyType) {
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 1.0;
            break;
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 1.36;
            break;
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 0.92;
            break;
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 155.24;
            break;
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 16.61;
            break;
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 18.18;
            break;
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 1.49;
            break;
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 1.63;
            break;
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 0.91;
            break; 
    }
}

function CADCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType) {
    switch (outputCurrnecyType) {
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 0.73;
            break;
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 1.0;
            break;
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 0.68;
            break;
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 114.0;
            break;
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 12.20;
            break;
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 13.35;
            break;
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 1.10;
            break; 
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 1.20;
            break;
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 0.67;
            break; 
    }
}

function EURCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType) {
    switch (outputCurrnecyType) {
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 1.09;
            break;
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 1.48;
            break;
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 1.0;
            break;
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 169.06;
            break;
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 18.03;
            break;
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 19.76;
            break;
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 1.63;
            break; 
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 1.77;
            break;
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 0.99;
            break;
    }
}

function JMDCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType) {
    switch (outputCurrnecyType) {
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 0.0064;
            break;
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 0.0088;
            break;
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 0.0059;
            break;
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 1.0;
            break;
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 0.11;
            break;
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 0.12;
            break;
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 0.0096;
            break; 
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 0.011;
            break;
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 0.0059;
            break;
    }
}

function MXNCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType) {
    switch (outputCurrnecyType) {
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 0.060;
            break;
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 0.082;
            break;
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 0.055;
            break;
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 9.35;
            break;
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 1.0;
            break;
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 1.09;
            break;
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 0.090;
            break;
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 0.098;
            break;
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 0.055;
            break;
    }
}

function ZARCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType) {
    switch (outputCurrnecyType) {
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 0.055;
            break;
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 0.075;
            break;
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 0.051;
            break;
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 8.54;
            break;
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 0.91;
            break;
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 1.0;
            break;
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 0.082;
            break;
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 0.090;
            break;
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 0.050;
            break;
    }
}

function AUDCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType) {
    switch (outputCurrnecyType) {
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 0.67;
            break;
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 0.91;
            break;
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 0.61;
            break;
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 104.03;
            break;
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 11.13;
            break;
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 12.17;
            break;
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 1.0;
            break; 
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 1.09;
            break;
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 0.61;
            break;
    }
}

function NZDCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType) {
    switch (outputCurrnecyType) {
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 0.61;
            break;
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 0.83;
            break;
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 0.56;
            break;
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 95.20;
            break;
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 10.18;
            break;
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 11.15;
            break;
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 0.92;
            break;
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 1.0;
            break;
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 0.56;
            break;
    }
}

function CHFCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType) {
    switch (outputCurrnecyType) {
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 1.10;
            break;
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 1.50;
            break;
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 1.01;
            break;
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 170.77;
            break;
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 18.27;
            break;
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 20.00;
            break;
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 1.64;
            break; 
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 1.79;
            break;
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 1.0;
            break;
    }
}

window.convertCurrency = convertCurrency;