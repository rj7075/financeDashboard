import { create } from "zustand";

export const useStore = create((set) => ({
  transactions: [],
  role: "viewer",
  filter: "all",

  setTransactions: (data) => set({ transactions: data }),
  setRole: (role) => set({ role }),
  setFilter: (filter) => set({ filter }),

  addTransaction: (tx) =>
    set((state) => ({
      transactions: [...state.transactions, tx],
    })),
}));