const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export async function createJob(payload: any) {
  const res = await fetch(`${API_BASE}/api/jobs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Failed to create job");
  }

  return res.json();
}
