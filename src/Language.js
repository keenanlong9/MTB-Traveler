import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";
import { LanguageCode, Polly } from "@aws-sdk/client-polly";
import { getSynthesizeSpeechUrl } from "@aws-sdk/polly-request-presigner";

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
        outputText.value = data.TranslatedText;
        audioTranslateText();
    } catch (error) {
        console.error("Error", error);
        outputText.value = "Error";
    }
};

const audioTranslateText = async () => {
    const pollyClient = new Polly({
        region: "us-east-1",
        credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({region: "us-east-1"}),
            identityPoolId: "us-east-1:891d8d0f-1caf-4b14-81f7-71114388deb6"
        }),
    });

    const speechParams = {
        OutputFormat: "mp3",
        Text: "",
        TextType: "text",
        VoiceId: "Matthew",
        LanguageCode: "fr-FR"
      };


      speechParams.Text = document.getElementById("output_text").value;
      try {
        let url = await getSynthesizeSpeechUrl({
          client: pollyClient,
          params: speechParams,
        });
        console.log(url);
        // Load the URL of the voice recording into the browser
        document.getElementById("translate_audio_src").src = url;
        document.getElementById("translate_audio").load();
      } catch (err) {
        console.log("Error", err);
      }
};

window.translateText = translateText;
