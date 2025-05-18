import { create } from 'zustand';

export const useAppStore = create((set) => ({
    isRulesShown: false,
    isDashboardShown: false,
    isFullscreen: false,
    hiddenSymbols: [],

    setShowRules: (val) => set({ isRulesShown: val }),
    setShowDashboard: (val) => set({ isDashboardShown: val }),
    setIsFullscreen: (val) => set({ isFullscreen: val }),
    addHiddenSymbol: (symbol) => set((state) => ({ hiddenSymbols: [...state.hiddenSymbols, symbol] })),
    resetHiddenSymbols: () => set({ hiddenSymbols: [] }),


    showRules: () => set({ isRulesShown: true }),
    showDashboard: () => set({ isDashboardShown: true }),
}));
