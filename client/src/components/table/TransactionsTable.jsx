import { useState } from "react";
import { useStore } from "../../store/useStore";
import AddTransactionModal from "./AddtransactionPopUpModel";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";

export default function TransactionsTable() {
  const { transactions, deleteTransaction, filter, setFilter, role } =
    useStore();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);
  const [editData, setEditData] = useState(null);
  const [open, setOpen] = useState(false);

  const perPage = 5;

  // FILTER
  const filtered = transactions
    .filter((t) => (filter === "all" ? true : t.type === filter))
    .filter((t) => t.category.toLowerCase().includes(search.toLowerCase()));

  //SORT
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "latest") return new Date(b.date) - new Date(a.date);
    if (sort === "oldest") return new Date(a.date) - new Date(b.date);
    if (sort === "high") return b.amount - a.amount;
    if (sort === "low") return a.amount - b.amount;
  });

  //PAGINATION
  const paginated = sorted.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-2 w-full mb-5 md:w-auto">
        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-auto px-3 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2"
          style={{
            background: "var(--card)",
            color: "var(--text)",
            borderColor: "var(--muted)",
          }}
        />

        <select
          onChange={(e) => setSort(e.target.value)}
          className="w-full sm:w-auto px-3 py-2 text-sm cursor-pointer rounded-lg border focus:outline-none focus:ring-2"
          style={{
            background: "var(--card)",
            color: "var(--text)",
            borderColor: "var(--muted)",
          }}
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="high">Amount High</option>
          <option value="low">Amount Low</option>
        </select>

        <select
          onChange={(e) => setFilter(e.target.value)}
          className="w-full sm:w-auto px-3 py-2 text-sm rounded-lg cursor-pointer border focus:outline-none focus:ring-2"
          style={{
            background: "var(--card)",
            color: "var(--text)",
            borderColor: "var(--muted)",
          }}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div
        className="p-5 rounded-2xl shadow-sm overflow-x-auto"
        style={{ background: "var(--card)", color: "var(--text)" }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
          <h2 className="font-semibold text-base">Transactions</h2>
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
            {paginated.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6">
                  📭 No transactions found
                </td>
              </tr>
            ) : (
              paginated.map((t) => (
                <tr key={t.id} className="transition ">
                  <td className="py-3">{t.date}</td>

                  <td
                    className="font-medium"
                    style={{
                      color:
                        t.type === "income"
                          ? "var(--success)"
                          : "var(--danger)",
                    }}
                  >
                    ₹{t.amount.toLocaleString("en-IN")}
                  </td>

                  <td>{t.category}</td>

                  <td>{t.type}</td>

                  {role === "admin" && (
                    <td className="py-3">
                      <div className="flex gap-2">
                        {/* Edit */}
                        <button
                          onClick={() => {
                            setEditData(t);
                            setOpen(true);
                            toast("Editing transaction ✏️");
                          }}
                          className="flex items-center gap-1 px-3 py-1 text-xs rounded-md transition cursor-pointer"
                          style={{
                            background: "rgba(37, 99, 235, 0.1)",
                            color: "var(--primary)",
                          }}
                        >
                          <FiEdit size={14} />
                          Edit
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => {
                            if (confirm("Delete this transaction?")) {
                              deleteTransaction(t.id);
                              toast.success("Transaction deleted 🗑️");
                            }
                          }}
                          className="flex items-center gap-1 px-3 py-1 text-xs rounded-md transition cursor-pointer"
                          style={{
                            background: "rgba(220, 38, 38, 0.1)",
                            color: "var(--danger)",
                          }}
                        >
                          <FiTrash2 size={14} />
                          Delete
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
        <AddTransactionModal
          key={editData ? editData.id : "add"}
          isOpen={open}
          onClose={() => {
            setOpen(false);
            setEditData(null);
          }}
          initialData={editData}
        />

        {/* Pagination */}
        <div className="flex justify-end mt-4 gap-2">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-2 py-1 border cursor-pointer rounded"
          >
            Prev
          </button>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page * perPage >= sorted.length}
            className="px-2 cursor-pointer py-1 border rounded"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
