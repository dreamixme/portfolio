import { create } from 'zustand';

interface DemoState {
  submitCount: number;
  incrementSubmitCount: () => void;
  reset: () => void;
}

export const useDemoStore = create<DemoState>()((set) => ({
  submitCount: 0,
  incrementSubmitCount: () => set((state) => ({ submitCount: state.submitCount + 1 })),
  reset: () => set({ submitCount: 0 }),
}));
