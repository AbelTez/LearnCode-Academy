const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

async function jsonFetch(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.ok === false) {
    const msg = data.error || data.message || "Request failed";
    throw new Error(msg);
  }
  return data;
}

export const api = {
  getCourses: () => jsonFetch("/api/courses"),
  createCourse: (course) =>
    jsonFetch("/api/courses", { method: "POST", body: JSON.stringify(course) }),
  sendContact: (payload) =>
    jsonFetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  signup: (payload) =>
    jsonFetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  login: (payload) =>
    jsonFetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
