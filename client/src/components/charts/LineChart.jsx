import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useStore } from "../../store/useStore";

export default function BalanceLineChart() {
  const { transactions } = useStore();

  // sort by date
  const sorted = [...transactions].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  // cumulative balance
  let runningBalance = 0;

  const data = sorted.map((t) => {
    runningBalance += t.type === "income" ? t.amount : -t.amount;

    return {
      date: t.date,
      balance: runningBalance,
    };
  });

  return (
    <div
      className="p-5 rounded-2xl shadow-sm"
      style={{ background: "var(--card)" }}
    >
      <h2 className="mb-4 font-semibold">Balance Trend</h2>

      {data.length === 0 ? (
        <p
          className="text-sm text-center py-10"
          style={{ color: "var(--muted)" }}
        >
          No data available
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            {/* grid for premium look */}
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />
            <YAxis />

            {/* better tooltip */}
            <Tooltip
              formatter={(value) =>
                `₹${value.toLocaleString("en-IN")}`
              }
            />

            {/* smooth premium line */}
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}