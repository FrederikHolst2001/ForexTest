
const API_BASE = "/api";

export async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error("API error");
  return res.json();
}
