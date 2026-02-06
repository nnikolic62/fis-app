import { addModuleTranslations, LANGUAGES } from "@repo/i18n-config";

// Import module-specific translations
import srCyrlKadrovi from "./locales/sr-Cyrl/kadrovi.json";
import srLatnKadrovi from "./locales/sr-Latn/kadrovi.json";

// Module namespace
export const KADROVI_NS = "kadrovi";

// Register module translations
export function initKadroviTranslations() {
  addModuleTranslations(LANGUAGES.SR_CYRL, KADROVI_NS, srCyrlKadrovi);
  addModuleTranslations(LANGUAGES.SR_LATN, KADROVI_NS, srLatnKadrovi);
}

// Initialize immediately when module is imported
initKadroviTranslations();

