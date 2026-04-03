import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import NotFound from "./pages/NotFound";
import Navbar from "./components/common/Navbar";
import { useState } from "react";
import "./index.css";

export default function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}