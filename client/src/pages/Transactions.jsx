import RoleSwitcher from "../components/common/RoleSwitcher";
import TransactionsTable from "../components/table/TransactionsTable";

export default function Transactions() {
  return (
    <div
      className="p-6 space-y-6 min-h-screen"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Transactions</h1>
        <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
          View and manage your financial transactions
        </p>
        
      </div>
 <RoleSwitcher />
      {/* Table Section */}
     
      <div>
        <TransactionsTable />
      </div>
    </div>
  );
}