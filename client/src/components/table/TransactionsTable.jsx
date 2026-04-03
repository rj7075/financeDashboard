import { useStore } from "../../store/useStore";

export default function TransactionsTable() {
  const { transactions, filter, setFilter, role } = useStore();

  const filtered =
    filter === "all"
      ? transactions
      : transactions.filter((t) => t.type === filter);

  return (
    <div
      className="p-5 rounded-2xl shadow-sm overflow-x-auto"
      style={{ background: "var(--card)", color: "var(--text)" }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-4">
        <h2 className="font-semibold">Transactions</h2>

        <select
          onChange={(e) => setFilter(e.target.value)}
          className="border px-2 py-1 rounded-md text-sm"
          style={{
            background: "var(--card)",
            color: "var(--text)",
          }}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full text-sm min-w-[500px]">
        <thead>
          <tr
            style={{
              color: "var(--muted)",
              borderBottom: "1px solid var(--muted)",
            }}
          >
            <th className="text-left py-2">Date</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Category</th>
            <th className="text-left">Type</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-6">
                No transactions found
              </td>
            </tr>
          ) : (
            filtered.map((t) => (
              <tr
                key={t.id}
                className="transition"
                style={{
                  borderBottom: "1px solid rgba(100,116,139,0.2)",
                }}
              >
                <td className="py-3">{t.date}</td>

                <td className="font-medium">
                  ₹{t.amount.toLocaleString("en-IN")}
                </td>

                <td>{t.category}</td>

                <td
                  className="font-medium"
                  style={{
                    color:
                      t.type === "income"
                        ? "var(--success)"
                        : "var(--danger)",
                  }}
                >
                  {t.type}
                </td>

                {role === "admin" && (
                  <td>
                    <button className="text-blue-500 text-xs hover:underline">
                      Edit
                    </button>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}