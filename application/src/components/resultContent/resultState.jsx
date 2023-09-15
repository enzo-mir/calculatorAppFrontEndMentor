import { create } from "zustand";

export const resultState = create((set) => ({
  result: [],
  setResult: (val) => set(() => ({ result: val })),
}));
