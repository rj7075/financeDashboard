import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center px-4"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      {/* Big 404 */}
      <h1 className="text-5xl font-bold mb-2">404</h1>

      {/* Message */}
      <p className="text-lg mb-4">
        Page not found
      </p>

      <p
        className="text-sm mb-6"
        style={{ color: "var(--muted)" }}
      >
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Back button */}
      <Link
        to="/"
        className="px-4 py-2 rounded-lg text-sm transition"
        style={{
          background: "var(--primary)",
          color: "#fff",
        }}
      >
        Go to Dashboard
      </Link>
    </div>
  );
}