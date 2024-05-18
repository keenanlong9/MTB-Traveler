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
            outputCurrnecy.value = inputCurrnecy * 1.63;
            break;
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 1.49;
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
            outputCurrnecy.value = inputCurrnecy * 1.20;
            break;
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 1.10;
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
            outputCurrnecy.value = inputCurrnecy * 1.76;
            break;
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 1.63;
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
            outputCurrnecy.value = inputCurrnecy * 0.011;
            break;
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 0.0096;
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
            outputCurrnecy.value = inputCurrnecy * 0.098;
            break;
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 0.090;
            break; 
    }
}

function ZARCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType) {
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
            outputCurrnecy.value = inputCurrnecy * 95.22;
            break;
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 10.19;
            break;
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 1.0;
            break;
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 0.092;
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
            outputCurrnecy.value = inputCurrnecy * 1.09;
            break;
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 1.0;
            break; 
    }
}

window.convertCurrency = convertCurrency;