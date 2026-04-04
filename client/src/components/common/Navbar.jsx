import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // apply dark mode globally
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const linkClass = ({ isActive }) =>
    isActive ? "font-semibold" : "opacity-80 hover:opacity-100";

  return (
    <nav
      className="w-full sticky top-0 z-50 border-b"
      style={{
        background: "var(--card)",
        color: "var(--text)",
        borderColor: "var(--muted)",
        backdropFilter: "blur(10px)", // 🔥 premium feel
      }}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 md:px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/zorvynfintech.png"
            alt="Logo"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">

          <div className="flex gap-4 text-sm">
            <NavLink to="/" className={linkClass}>
              Dashboard
            </NavLink>

            <NavLink to="/transactions" className={linkClass}>
              Transactions
            </NavLink>
          </div>

          {/* Dark Mode Button */}
          <button
            onClick={() => setDark(!dark)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition"
            style={{
              border: "1px solid var(--muted)",
              background: "var(--card)",
              color: "var(--text)",
            }}
          >
            {dark ? <FiSun /> : <FiMoon />}
            {dark ? "Light" : "Dark"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm border-t"
          style={{ borderColor: "var(--muted)" }}
        >
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={linkClass}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/transactions"
            onClick={() => setMenuOpen(false)}
            className={linkClass}
          >
            Transactions
          </NavLink>

          {/* Dark Mode Button */}
          <button
            onClick={() => {
              setDark(!dark);
              setMenuOpen(false);
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-left transition"
            style={{
              border: "1px solid var(--muted)",
              background: "var(--card)",
              color: "var(--text)",
            }}
          >
            {dark ? <FiSun /> : <FiMoon />}
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}