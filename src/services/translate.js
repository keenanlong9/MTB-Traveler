import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";
import { awsConfig } from "./awsClients";

const client = new TranslateClient(awsConfig);

export const translateText = async (text, targetLang) => {
  const params = {
    Text: text,
    SourceLanguageCode: "auto",
    TargetLanguageCode: targetLang,
  };
  const command = new TranslateTextCommand(params);
  const { TranslatedText } = await client.send(command);
  return TranslatedText;
};
