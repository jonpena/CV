/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { translations } from "../constants/translations";

interface TranslationStoreState {
  currentLang: string;
  toggleLanguage: () => void;
  t: (path: string) => string;
}

export const useTranslationStore = create<TranslationStoreState>(
  (set, get) => ({
    currentLang: "en",
    toggleLanguage: () =>
      set((state) => ({
        currentLang: state.currentLang === "es" ? "en" : "es",
      })),
    t: (path: string) => {
      const keys = path.split(".");
      // state.
      let value = (translations as any)[get().currentLang];

      for (const key of keys) {
        // Verifica si el key es un índice de array (e.g., "menu.0.items.1")
        const arrayIndex = parseInt(key);

        if (!isNaN(arrayIndex)) {
          value = value[arrayIndex];
        } else {
          value = value[key];
        }

        // Si el valor es undefined, retorna una cadena vacía o un mensaje de error
        if (value === undefined) {
          console.warn(`Translation not found for key: ${path}`);
          return "";
        }
      }
      return value;
    },
  })
);
