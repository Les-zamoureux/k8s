import { writable } from "svelte/store";

export const logged = writable(false)

export const currentPage = writable(null)

export const popupContent = writable(null)

export function openPopup(component, props = {}) {
  popupContent.set({ component, props });
}

export function closePopup() {
  popupContent.set(null);
}
