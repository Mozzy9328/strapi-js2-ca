import { theKey } from "../settings/theKey.js";

export function saveToStorage(value) {
  localStorage.setItem(theKey, JSON.stringify(value));
}

export function getFromStorage() {
  const value = localStorage.getItem(theKey);

  if (!value) {
    return [];
  }
  return JSON.parse(value);
}
