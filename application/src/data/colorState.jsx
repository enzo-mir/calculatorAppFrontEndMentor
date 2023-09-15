import { create } from "zustand";
export const colorThemeState = create((set) => ({
  theme: 0,
  setTheme: (val) => set(() => ({ theme: val })),
}));
