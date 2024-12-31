import { translations } from "../constants/translations";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const changeTranslation = (path: string, currentLang: string) => {
  const keys = path.split(".");
  // state.
  let value = (translations as any)[currentLang];

  for (const key of keys) {
    // Verifica si el key es un índice de array (e.g., "menu.0.items.1")
    const arrayIndex = parseInt(key);

    if (!isNaN(arrayIndex)) {
      value = value[arrayIndex];
    } else {
      value = value[key];
    }

    // Si el valor es undefined, retorna una cadena vacía o un mensaje de error
    if (!value) {
      console.warn(`Translation not found for key: ${path}`);
      return "";
    }
  }
  return value;
};
