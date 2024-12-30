import { Globe } from "lucide-react";
import { useTranslationStore } from "../../store/translationStore";

export default function LanguageButton() {
  const { currentLang, toggleLanguage } = useTranslationStore();

  return (
    <button
      onClick={toggleLanguage}
      className="min-w-[90px] border ease-in-out flex items-center justify-start gap-x-2
      bg-[#0082E6] hover:bg-[#0082E6]/80 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-200
      "
    >
      <Globe className="w-4 h-4" />
      {currentLang === "es" ? "ENG" : "ESP"}
    </button>
  );
}