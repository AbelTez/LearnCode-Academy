import { Course } from "../models/Course.js";

const seedCourses = [
  {
    title: "Full Stack Web Development Bootcamp",
    rating: 4.9,
    level: "Beginner",
    duration: "3 Months",
    instructor: "Abenezer",
  },
  {
    title: "Python for Data Science and AI",
    rating: 4.7,
    level: "All Levels",
    duration: "2 Months",
    instructor: "Biy",
  },
  {
    title: "UI/UX Design Masterclass",
    rating: 5.0,
    level: "Intermediate",
    duration: "1.5 Months",
    instructor: "Abiy",
  },
];

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

export async function handleCourses(req, res, parsed) {
  if (req.method === "GET") {
    try {
      let data = seedCourses;
      if (Course.db && Course.db.readyState === 1) {
        const docs = await Course.find().lean();
        if (docs.length) data = docs;
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ ok: true, data }));
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({ ok: false, error: "Failed to fetch courses" })
      );
    }
  }

  if (req.method === "POST") {
    try {
      const body = await parseBody(req);
      const { title, rating, level, duration, instructor, image } = body;
      if (!title) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ ok: false, error: "Title required" }));
      }
      let saved = null;
      if (Course.db && Course.db.readyState === 1) {
        saved = await Course.create({
          title,
          rating,
          level,
          duration,
          instructor,
          image,
        });
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ ok: true, saved: saved?._id || null }));
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({ ok: false, error: "Failed to save course" })
      );
    }
  }

  res.writeHead(405, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
}
