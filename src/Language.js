import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";

document.addEventListener("DOMContentLoaded", function() {
const translateText = async () => {
    const inputText = document.getElementById("input_text").value;
    const outputText = document.getElementById("output_text");

    const translateClient = new TranslateClient({
        region: "us-east-1",
        credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({region: "us-east-1"}),
            identityPoolId: "us-east-1:891d8d0f-1caf-4b14-81f7-71114388deb6"
        }),
    });

    const translateParams = {
        Text: inputText,
        SourceLanguageCode: "auto",
        TargetLanguageCode: "fr"
    };

    const translateTextCommand = new TranslateTextCommand(translateParams);
    try{
        const data = await translateClient.send(translateTextCommand);
        outputText.textContent = data.TranslatedText;
    } catch (error) {
        console.error("Error", error);
        outputText.textContent = "Error";
    }
}

document.getElementById("translate_btn").addEventListener("click", translateText);
});