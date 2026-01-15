import { Contact } from "../models/Contact.js";

function parseBody(req) {
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

export async function handleContact(req, res) {
  if (req.method === "POST") {
    try {
      const body = await parseBody(req);
      const { name, email, message } = body;
      if (!name || !email || !message) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ ok: false, error: "Missing fields" }));
      }

      let saved = null;
      if (Contact.db && Contact.db.readyState === 1) {
        saved = await Contact.create({ name, email, message });
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ ok: true, saved: saved?._id || null }));
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ ok: false, error: "Failed to save" }));
    }
  }

  res.writeHead(405, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
}
