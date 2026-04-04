import { create } from "zustand";
import toast from "react-hot-toast";

export const useStore = create((set) => ({
  transactions: [],
  role: "viewer",
  filter: "all",

  setTransactions: (data) => {
    set({ transactions: data });
    toast.success("Transactions loaded");
  },

  setRole: (role) => {
    set({ role });
    toast("Role updated");
  },

  setFilter: (filter) => {
    set({ filter });
  },

  deleteTransaction: (id) =>
    set((state) => {
      const updated = state.transactions.filter((t) => t.id !== id);
      toast.success("Transaction deleted");
      return { transactions: updated };
    }),

  updateTransaction: (updatedTx) =>
    set((state) => {
      const updated = state.transactions.map((t) =>
        String(t.id) === String(updatedTx.id)
          ? { ...t, ...updatedTx }
          : t
      );
      toast.success("Transaction updated");
      return { transactions: updated };
    }),

  addTransaction: (tx) =>
    set((state) => {
      const newTx = {
        ...tx,
        id: Date.now(), // ensure id exists
      };
      toast.success("Transaction added");
      return {
        transactions: [...state.transactions, newTx],
      };
    }),
}));