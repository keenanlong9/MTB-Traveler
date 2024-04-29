import { TranslateClient, TranslateTextCommand } from "/node_modules/@aws-sdk/client-translate";

// Function to handle translation
async function translateText() {
  const inputText = document.getElementById("input_text").value;
  const outputTextElement = document.getElementById("output_text");

  // Create a TranslateClient
  const translateClient = new TranslateClient({ region: "us-east-1" });

  // Set up parameters for the TranslateTextCommand
  const params = {
    Text: inputText,
    SourceLanguageCode: "auto",
    TargetLanguageCode: "fr" 
  };

  // Create a TranslateTextCommand and execute it
  const command = new TranslateTextCommand(params);
  try {
    const data = await translateClient.send(command);
    outputTextElement.value = data.TranslatedText;
  } catch (error) {
    console.error("Error translating text:", error);
    outputTextElement.value = "Translation Error";
  }
}

// Add event listener to the Translate button
document.getElementById("translate_btn").addEventListener("click", translateText);