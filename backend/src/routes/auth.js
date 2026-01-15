import { User } from "../models/User.js";

async function parseBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => {
      try {
        resolve(JSON.parse(data || "{}"));
      } catch (e) {
        reject(e);
      }
    });
  });
}

export async function handleAuth(req, res, parsed) {
  if (req.method === "POST" && parsed.pathname === "/api/auth/signup") {
    try {
      const { name, email, password } = await parseBody(req);
      if (!email || !password) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({ ok: false, error: "Email and password required" })
        );
      }
      if (!(User.db && User.db.readyState === 1)) {
        res.writeHead(503, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({ ok: false, error: "DB not connected" })
        );
      }
      const existing = await User.findOne({ email });
      if (existing) {
        res.writeHead(409, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({ ok: false, error: "Email already registered" })
        );
      }
      const passwordHash = User.hashPassword(password);
      const user = await User.create({ name, email, passwordHash });
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({
          ok: true,
          user: { id: user._id, email: user.email, name: user.name },
        })
      );
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ ok: false, error: "Signup failed" }));
    }
  }

  if (req.method === "POST" && parsed.pathname === "/api/auth/login") {
    try {
      const { email, password } = await parseBody(req);
      if (!email || !password) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({ ok: false, error: "Email and password required" })
        );
      }
      if (!(User.db && User.db.readyState === 1)) {
        res.writeHead(503, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({ ok: false, error: "DB not connected" })
        );
      }
      const user = await User.findOne({ email });
      const passwordHash = User.hashPassword(password);
      if (!user || user.passwordHash !== passwordHash) {
        res.writeHead(401, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({ ok: false, error: "Invalid credentials" })
        );
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({
          ok: true,
          user: { id: user._id, email: user.email, name: user.name },
        })
      );
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ ok: false, error: "Login failed" }));
    }
  }

  res.writeHead(405, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
}
