
import { create } from "zustand";

type ScreenType = "home" | "patients" | "details" | "agenda";

interface AppStore {
  auth: boolean;
  screen: ScreenType;
  selectedPatient: any | null;

  login: () => void;
  logout: () => void;
  navigate: (screen: ScreenType) => void;
  setPatient: (patient: any) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  auth: false,
  screen: "home",
  selectedPatient: null,

  login: () => set(() => ({ auth: true })),
  logout: () => set(() => ({ auth: false, screen: "home", selectedPatient: null })),
  navigate: (screen: ScreenType) => set(() => ({ screen })),
  setPatient: (patient: any) => set(() => ({ selectedPatient: patient })),
}));
