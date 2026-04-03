import { useStore } from "../store/useStore";
import { useEffect } from "react";
import RoleSwitcher from "../components/common/RoleSwitcher";
import SummaryCard from "../components/cards/SummaryCard";
import Insights from "../components/Insights";
import BalanceLineChart from "../components/charts/LineChart";
import SpendingPieChart from "../components/charts/PieChart";
import TransactionsTable from "../components/table/TransactionsTable";
import { transactionsData } from "../data/mockData";

export default function Dashboard() {
  const { setTransactions } = useStore();

  useEffect(() => {
    setTransactions(transactionsData);
  }, []);

  return (
    <div
      className="p-6 space-y-6 min-h-screen"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <RoleSwitcher />

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