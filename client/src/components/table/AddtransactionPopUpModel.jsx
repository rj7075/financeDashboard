import { useState, useEffect } from "react";
import { useStore } from "../../store/useStore";
import toast from "react-hot-toast";

export default function AddTransactionModal({
  isOpen,
  onClose,
  initialData,
}) {
  const { addTransaction, updateTransaction } = useStore();

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  // ✅ Prefill / Reset
  useEffect(() => {
    if (initialData) {
      setForm({
        date: initialData.date || "",
        amount: initialData.amount || "",
        category: initialData.category || "",
        type: initialData.type || "expense",
      });
    } else {
      setForm({
        date: "",
        amount: "",
        category: "",
        type: "expense",
      });
    }
  }, [initialData]);

  if (!isOpen) return null;

  const isEdit = !!initialData;

  const inputStyle = {
    background: "var(--card)",
    color: "var(--text)",
    borderColor: "var(--muted)",
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      
      <div
        className="p-6 rounded-2xl w-full max-w-md shadow-lg"
        style={{
          background: "var(--card)",
          color: "var(--text)",
        }}
      >
        {/* Title */}
        <h2 className="text-lg font-semibold mb-4">
          {isEdit ? "Edit Transaction" : "Add Transaction"}
        </h2>

        {/* Form */}
        <div className="flex flex-col gap-3">

          <input
            type="date"
            value={form.date}
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
            className="p-2 rounded-lg border focus:outline-none focus:ring-2"
            style={inputStyle}
          />

          <input
            type="number"
            placeholder="Enter amount"
            value={form.amount}
            onChange={(e) =>
              setForm({ ...form, amount: e.target.value })
            }
            className="p-2 rounded-lg border focus:outline-none focus:ring-2"
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Enter category"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
            className="p-2 rounded-lg border focus:outline-none focus:ring-2"
            style={inputStyle}
          />

          <select
            value={form.type}
            onChange={(e) =>
              setForm({ ...form, type: e.target.value })
            }
            className="p-2 rounded-lg border focus:outline-none focus:ring-2"
            style={inputStyle}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-3">

            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-md text-sm"
              style={{
                border: "1px solid var(--muted)",
                color: "var(--text)",
              }}
            >
              Cancel
            </button>

            <button
              onClick={() => {
                if (!form.date || !form.amount || !form.category) {
                  toast.error("Please fill all fields");
                  return;
                }

                const payload = {
                  ...form,
                  id: initialData?.id,
                  amount: Number(form.amount),
                };

                if (isEdit) {
                  updateTransaction(payload);
                  toast.success("Transaction updated ✅");
                } else {
                  addTransaction(payload);
                  toast.success(
                    payload.type === "income"
                      ? "Income added 💰"
                      : "Expense added 💸"
                  );
                }

                onClose();
              }}
              className="px-4 py-1.5 rounded-md text-sm text-white"
              style={{
                background: "var(--primary)",
              }}
            >
              {isEdit ? "Update" : "Add"}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}