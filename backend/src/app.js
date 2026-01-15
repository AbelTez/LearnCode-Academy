import http from "http";
import url from "url";
import { connectDB } from "./config/db.js";
import { handleContact } from "./routes/contact.js";
import { handleCourses } from "./routes/courses.js";
import { handleAuth } from "./routes/auth.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 4000;

// Connect to DB (optional if MONGO_URL provided)
connectDB().catch((err) => console.error("DB connection error:", err));

const server = http.createServer(async (req, res) => {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  const parsed = url.parse(req.url, true);

  try {
    if (parsed.pathname === "/api/health" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ ok: true, status: "healthy" }));
    }

    if (parsed.pathname === "/api/contact") return handleContact(req, res);
    if (parsed.pathname.startsWith("/api/courses"))
      return handleCourses(req, res, parsed);
    if (parsed.pathname.startsWith("/api/auth"))
      return handleAuth(req, res, parsed);

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: false, error: "Not found" }));
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: false, error: "Server error" }));
  }
});

server.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
