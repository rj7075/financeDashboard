import { useState } from "react";
import { useStore } from "../../store/useStore";

export default function AddTransaction() {
  const { addTransaction, role } = useStore();

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  if (role !== "admin") return null;

  return (
    <div className="p-4 mb-4 border rounded-lg">
      <h3 className="mb-2 font-semibold">Add Transaction</h3>

      <div className="flex flex-wrap gap-2">
        <input
          type="date"
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
          className="border p-1"
        />

        <input
          type="number"
          placeholder="Amount"
          onChange={(e) =>
            setForm({ ...form, amount: Number(e.target.value) })
          }
          className="border p-1"
        />

        <input
          type="text"
          placeholder="Category"
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
          className="border p-1"
        />

        <select
          onChange={(e) =>
            setForm({ ...form, type: e.target.value })
          }
          className="border p-1"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button
          onClick={() => {
            if (!form.date || !form.amount || !form.category) return;
            addTransaction(form);
          }}
          className="bg-blue-500 text-white px-3 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}