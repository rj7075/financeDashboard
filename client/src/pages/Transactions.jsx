import RoleSwitcher from "../components/common/RoleSwitcher";
import AddTransaction from "../components/table/Addtransaction";
import AddTransactionModal from "../components/table/AddtransactionPopUpModel";
import TransactionsTable from "../components/table/TransactionsTable";
import { useState } from "react";
import { useStore } from "../store/useStore";

export default function Transactions() {
  const { role } = useStore();
    const [open, setOpen] = useState(false);
    const [editData, setEditData] = useState(null);
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
      
 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
   
   {/* Left */}
   <RoleSwitcher />
 
   {/* Right */}
   {role === "admin" && (
     <button
       onClick={() => setOpen(true)}
       className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
     >
       + Add Transaction
     </button>
   )}
 
 </div>
 <AddTransactionModal
   isOpen={open}
   onClose={() => {
     setOpen(false);
     setEditData(null);
   }}
   initialData={editData}
 />
 
      {/* Table Section */}
     
      <div>

        <TransactionsTable />
      </div>
    </div>
  );
}