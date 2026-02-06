// Core i18n exports
export {
  i18n,
  initI18n,
  addModuleTranslations,
  resources,
  LANGUAGES,
  LANGUAGE_NAMES,
  DEFAULT_NS,
} from "./i18n";

export type { Language, Resources } from "./i18n";

// Re-export commonly used hooks from react-i18next
export { useTranslation, Trans, I18nextProvider } from "react-i18next";

// Re-export i18next types for type-safe translations
export type { TFunction } from "i18next";

// Components
export { LanguageSwitcher, useLanguage } from "./components/LanguageSwitcher.tsx";

