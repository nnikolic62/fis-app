import { useTranslation } from "react-i18next";
import { LANGUAGES, LANGUAGE_NAMES, type Language } from "../i18n.js";

export interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (lang: Language) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={className}>
      <select
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value as Language)}
        aria-label={t("language.select")}
      >
        {Object.entries(LANGUAGE_NAMES).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

// Hook for programmatic language switching
export function useLanguage() {
  const { i18n } = useTranslation();

  return {
    currentLanguage: i18n.language as Language,
    changeLanguage: (lang: Language) => i18n.changeLanguage(lang),
    languages: LANGUAGES,
    languageNames: LANGUAGE_NAMES,
  };
}

