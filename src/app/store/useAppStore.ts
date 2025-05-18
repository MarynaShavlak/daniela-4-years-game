import { create } from 'zustand';
import { TaskSymbol } from '@/shared/utils/taskImages'; // assuming this is where TaskSymbol is defined

interface AppStore {
    isRulesShown: boolean;
    isDashboardShown: boolean;
    isFullscreen: boolean;
    hiddenSymbols: TaskSymbol[];

    setShowRules: (val: boolean) => void;
    setShowDashboard: (val: boolean) => void;
    setIsFullscreen: (val: boolean) => void;
    addHiddenSymbol: (symbol: TaskSymbol) => void;
    resetHiddenSymbols: () => void;

    showRules: () => void;
    showDashboard: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
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
