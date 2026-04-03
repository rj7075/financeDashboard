import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

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

  return (
    <nav
      className="w-full border-b"
      style={{ background: "var(--card)", color: "var(--text)" }}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 md:px-6 py-4">
        {/* Logo */}
        <h1 className="font-semibold text-lg">Finance Dashboard</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-4 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-500"
                  : "hover:underline"
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-500"
                  : "hover:underline"
              }
            >
              Transactions
            </NavLink>
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="text-sm px-3 py-1 rounded-lg border transition hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm border-t">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "font-semibold text-blue-500" : ""
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/transactions"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "font-semibold text-blue-500" : ""
            }
          >
            Transactions
          </NavLink>

          <button
            onClick={() => setDark(!dark)}
            className="text-sm px-3 py-2 rounded-lg border text-left"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}