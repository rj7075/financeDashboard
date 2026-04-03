import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useStore } from "../../store/useStore";

export default function SpendingPieChart() {
  const { transactions } = useStore();

  const expenseData = transactions.filter((t) => t.type === "expense");

  // group by category
  const grouped = {};
  expenseData.forEach((t) => {
    grouped[t.category] = (grouped[t.category] || 0) + t.amount;
  });

  const data = Object.keys(grouped).map((key) => ({
    name: key,
    value: grouped[key],
  }));

  // 🎨 color palette (fintech style)
  const COLORS = [
    "#3b82f6",
    "#22c55e",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
  ];

  return (
    <div
      className="p-5 rounded-2xl shadow-sm"
      style={{ background: "var(--card)" }}
    >
      <h2 className="mb-4 font-semibold">Spending Breakdown</h2>

      {/* ✅ Empty state */}
      {data.length === 0 ? (
        <p className="text-sm text-center py-10" style={{ color: "var(--muted)" }}>
          No expense data available
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={80}
              innerRadius={40} // 🔥 donut style
              paddingAngle={3}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            {/* ✅ Better tooltip */}
            <Tooltip
              formatter={(value) =>
                `₹${value.toLocaleString("en-IN")}`
              }
            />

            {/* ✅ Legend */}
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}