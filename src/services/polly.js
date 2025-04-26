import { Polly } from "@aws-sdk/client-polly";
import { getSynthesizeSpeechUrl } from "@aws-sdk/polly-request-presigner";
import { awsConfig } from "./awsClients";
import { convertLanguageCode } from "../utils/languageUtils";

const client = new Polly(awsConfig);

export const synthesizeSpeechUrl = async (text, langCode) => {
  const params = {
    OutputFormat: "mp3",
    Text: text,
    TextType: "text",
    VoiceId: "Matthew",
    LanguageCode: convertLanguageCode(langCode),
  };

  return await getSynthesizeSpeechUrl({ client, params });
};
