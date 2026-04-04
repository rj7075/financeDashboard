import { useStore } from "../../store/useStore";

export default function RoleSwitcher() {
  const { role, setRole } = useStore();

  return (
    <div className="flex justify-end items-center gap-3">
      {/* label */}
      <span
        className="text-sm"
        style={{ color: "var(--muted)" }}
      >
        Role:
      </span>

      {/* dropdown */}
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="px-3 py-1.5 rounded-lg text-sm cursor-pointer border focus:outline-none"
        style={{
          background: "var(--card)",
          color: "var(--text)",
        }}
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

      {/* badge (visual feedback 🔥) */}
      <span
        className="text-xs px-2 py-1 rounded-full font-medium"
        style={{
          background:
            role === "admin"
              ? "rgba(59,130,246,0.1)"
              : "rgba(100,116,139,0.1)",
          color:
            role === "admin"
              ? "var(--primary)"
              : "var(--muted)",
        }}
      >
        {role === "admin" ? "Admin Mode" : "View Only"}
      </span>
    </div>
  );
}