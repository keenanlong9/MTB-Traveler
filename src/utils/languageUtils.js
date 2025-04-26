export function convertLanguageCode(code) {
    switch (code) {
      case "fr": return "fr-FR";
      case "en": return "en-US";
      case "de": return "de-DE";
      case "es": return "es-ES";
      default: return "en-US";
    }
  }
  