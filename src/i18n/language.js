import { useSyncExternalStore } from 'react';

const STORAGE_KEY = 'appscamelot-language';
const listeners = new Set();
let language = (() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'es') return saved;
  } catch {
    // Browser storage may be unavailable.
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
})();

export function getLanguage() {
  return language;
}

export function setLanguage(nextLanguage) {
  if (nextLanguage !== 'en' && nextLanguage !== 'es') return;
  language = nextLanguage;
  document.documentElement.lang = language;
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // The language still works for this session.
  }
  listeners.forEach((listener) => listener());
}

export function useLanguage() {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getLanguage,
    () => 'en'
  );
}

export function localized(en, es) {
  return language === 'es' ? es : en;
}

document.documentElement.lang = language;
