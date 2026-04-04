import { useStore } from "../store/useStore";
import { useEffect } from "react";
import RoleSwitcher from "../components/common/RoleSwitcher";
import SummaryCard from "../components/cards/SummaryCard";
import Insights from "../components/Insights";
import BalanceLineChart from "../components/charts/LineChart";
import SpendingPieChart from "../components/charts/PieChart";
import TransactionsTable from "../components/table/TransactionsTable";
import { transactionsData } from "../data/mockData";
import { useState } from "react";
import AddTransactionModal from "../components/table/AddtransactionPopUpModel";

export default function Dashboard() {
  const { role } = useStore();
  const { setTransactions } = useStore();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTransactions(transactionsData);
  }, []);

  return (
    <div
      className="p-6 space-y-6 min-h-screen"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {/* Left */}
        <RoleSwitcher />

        {/* Right */}
        {role === "admin" && (
          <button
            onClick={() => setOpen(true)}
            className="w-full sm:w-auto px-4 py-2 rounded-lg shadow transition"
            style={{
              background: "var(--primary)",
              color: "#fff",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.opacity = "0.9")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.opacity = "1")
            }
          >
            + Add Transaction
          </button>
        )}
      </div>

      <AddTransactionModal isOpen={open} onClose={() => setOpen(false)} />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Balance" />
        <SummaryCard title="Income" />
        <SummaryCard title="Expenses" />
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BalanceLineChart />
        <SpendingPieChart />
      </div>
      {/* Insights */}
      <Insights />
      {/* Transactions */}
      <TransactionsTable />
    </div>
  );
}
