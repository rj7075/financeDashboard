import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import NotFound from "./pages/NotFound";
import Navbar from "./components/common/Navbar";
import { useState } from "react";
import "./index.css";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">
 <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "var(--card)",
            color: "var(--text)",
            border: "1px solid var(--muted)",
          },
        }}
      />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}