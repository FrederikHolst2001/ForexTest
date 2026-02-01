// Base API URL (Vercel rewrite → Render backend)
const API_BASE = "/api";

/**
 * Simple fetch helper
 */
export async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error("API error");
  return res.json();
}

/**
 * Compatibility export (required by AuthContext)
 * This keeps the app building without breaking auth
 */
export const base44 = {
  get: apiGet,
};
