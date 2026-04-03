import { useStore } from "../../store/useStore";

export default function SummaryCard({ title }) {
  const { transactions } = useStore();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  const value =
    title === "Income" ? income : title === "Expenses" ? expense : balance;

  return (
    <div className="p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
     style={{ background: "var(--card)" }}>
  
  <p className="text-sm" style={{ color: "var(--muted)" }}>
    {title}
  </p>

  <h2 className="text-2xl font-semibold mt-1">
    ₹{value}
  </h2>
</div>
  );
}