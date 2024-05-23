def convertCurrency(inputCurrency, outputCurrency, outputCurrencyType):
    match inputCurrency:
        case "USD":
            USDCurrency(inputCurrency, outputCurrency, outputCurrencyType)
        case "CAD":
            CADCurrency(inputCurrency, outputCurrency, outputCurrencyType)
        case "EUR":
            EURCurrency(inputCurrency, outputCurrency, outputCurrencyType)
        case "JMD":
            JMDCurrency(inputCurrency, outputCurrency, outputCurrencyType)
        case "MXN":
            MXNCurrency(inputCurrency, outputCurrency, outputCurrencyType)
        case "ZAR":
            ZARCurrency(inputCurrency, outputCurrency, outputCurrencyType)
        case "AUD":
            AUDCurrency(inputCurrency, outputCurrency, outputCurrencyType)
        case "NZD":
            NZDCurrency(inputCurrency, outputCurrency, outputCurrencyType)
        case "CHF":
            CHFCurrency(inputCurrency, outputCurrency, outputCurrencyType)

def USDCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType):
    match outputCurrnecyType:
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 1.0
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 1.36
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 0.92
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 155.24
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 16.61
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 18.18
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 1.49
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 1.63
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 0.91

def CADCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType):
    match outputCurrnecyType:
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 0.73
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 1.0
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 0.68
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 114.0
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 12.20
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 13.35
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 1.10
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 1.20
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 0.67

def EURCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType):
    match outputCurrnecyType:
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 1.09
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 1.48
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 1.0
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 169.06
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 18.03
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 19.76
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 1.63
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 1.77
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 0.99

def JMDCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType):
    match outputCurrnecyType:
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 0.0064
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 0.0088
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 0.0059
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 1.0
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 0.11
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 0.12
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 0.0096
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 0.011
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 0.0059

def MXNCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType):
    match outputCurrnecyType:
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 0.060
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 0.082
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 0.055
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 9.35
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 1.0
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 1.09
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 0.090
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 0.098
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 0.055

def ZARCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType):
    match outputCurrnecyType:
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 0.055
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 0.075
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 0.051
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 8.54
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 0.91
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 1.0
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 0.082
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 0.090
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 0.050

def AUDCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType):
    match outputCurrnecyType:
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 0.67
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 0.91
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 0.61
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 104.03
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 11.13
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 12.17
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 1.0
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 1.09
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 0.61

def NZDCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType):
    match outputCurrnecyType:
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 0.61
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 0.83
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 0.56
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 95.20
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 10.18
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 11.15
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 0.92
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 1.0
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 0.56

def CHFCurrency(inputCurrnecy, outputCurrnecy, outputCurrnecyType):
    match outputCurrnecyType:
        case "USD":
            outputCurrnecy.value = inputCurrnecy * 1.10
        case "CAD":
            outputCurrnecy.value = inputCurrnecy * 1.50
        case "EUR":
            outputCurrnecy.value = inputCurrnecy * 1.01
        case "JMD":
            outputCurrnecy.value = inputCurrnecy * 170.77
        case "MXN":
            outputCurrnecy.value = inputCurrnecy * 18.27
        case "ZAR":
            outputCurrnecy.value = inputCurrnecy * 20.00
        case "AUD":
            outputCurrnecy.value = inputCurrnecy * 1.64
        case "NZD":
            outputCurrnecy.value = inputCurrnecy * 1.79
        case "CHF":
            outputCurrnecy.value = inputCurrnecy * 1.0