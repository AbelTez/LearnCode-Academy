import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    rating: { type: Number, default: 0 },
    level: { type: String },
    duration: { type: String },
    instructor: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

export const Course =
  mongoose.models.Course || mongoose.model("Course", CourseSchema);
