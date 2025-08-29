import { create } from 'zustand';

type AuthState = {
  isLoggedIn: boolean;
  log: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  log: () => set({ isLoggedIn: true, }),
  logout: () => set({ isLoggedIn: false }),
}));
