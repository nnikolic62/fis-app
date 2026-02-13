import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation resources
import srCyrlCommon from "./locales/sr-Cyrl/common.json";
import srLatnCommon from "./locales/sr-Latn/common.json";

// Supported languages
export const LANGUAGES = {
  SR_CYRL: "sr-Cyrl",
  SR_LATN: "sr-Latn",
} as const;

export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];

export const LANGUAGE_NAMES: Record<Language, string> = {
  [LANGUAGES.SR_CYRL]: "Српски (ћирилица)",
  [LANGUAGES.SR_LATN]: "Srpski (latinica)",
};

// Default namespaces
export const DEFAULT_NS = "common";

// Translation resources
export const resources = {
  [LANGUAGES.SR_CYRL]: {
    common: srCyrlCommon,
  },
  [LANGUAGES.SR_LATN]: {
    common: srLatnCommon,
  },
};

// Type for extending resources in modules
export type Resources = typeof resources;

// Initialize i18n instance
export function initI18n(defaultLanguage: Language = LANGUAGES.SR_LATN) {
  return i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      supportedLngs: Object.values(LANGUAGES),
      fallbackLng: defaultLanguage,
      defaultNS: DEFAULT_NS,
      ns: [DEFAULT_NS],
      interpolation: {
        escapeValue: false, // React already escapes values
      },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
        lookupLocalStorage: "i18nextLng",
      },
      react: {
        useSuspense: true,
      },
    });
}

// Function to add module translations dynamically
export function addModuleTranslations(
  language: Language,
  namespace: string,
  translations: Record<string, unknown>
) {
  i18n.addResourceBundle(language, namespace, translations, true, true);
}

// Export the i18n instance for direct access
export { i18n };

