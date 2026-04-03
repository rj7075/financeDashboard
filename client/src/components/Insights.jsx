import { useStore } from "../store/useStore";

export default function Insights() {
  const { transactions } = useStore();

  const expenses = transactions.filter((t) => t.type === "expense");

  const totalExpense = expenses.reduce((a, b) => a + b.amount, 0);

  const categoryMap = {};
  expenses.forEach((t) => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + t.amount;
  });

  const topCategory =
    Object.keys(categoryMap).length > 0
      ? Object.keys(categoryMap).reduce((a, b) =>
          categoryMap[a] > categoryMap[b] ? a : b
        )
      : "N/A";

  // optional extra insight
  const avgExpense =
    expenses.length > 0
      ? Math.round(totalExpense / expenses.length)
      : 0;

  return (
    <div
      className="p-5 rounded-2xl shadow-sm"
      style={{ background: "var(--card)" }}
    >
      <h2 className="font-semibold mb-4">Insights</h2>

      {transactions.length === 0 ? (
        <p
          className="text-sm text-center py-6"
          style={{ color: "var(--muted)" }}
        >
          No data available
        </p>
      ) : (
        <div className="space-y-3 text-sm">
          {/* total expense */}
          <div className="flex justify-between">
            <span style={{ color: "var(--muted)" }}>
              Total Spending
            </span>
            <span className="font-semibold">
              ₹{totalExpense.toLocaleString("en-IN")}
            </span>
          </div>

          {/* top category */}
          <div className="flex justify-between">
            <span style={{ color: "var(--muted)" }}>
              Top Category
            </span>
            <span className="font-semibold">{topCategory}</span>
          </div>

          {/* avg expense */}
          <div className="flex justify-between">
            <span style={{ color: "var(--muted)" }}>
              Avg Transaction
            </span>
            <span className="font-semibold">
              ₹{avgExpense.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}