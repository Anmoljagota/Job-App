import mongoose, { Document } from "mongoose";

export interface Job extends Document {
  title: string;
  department: string;
  jobtype: string;
  expectedSalary: number;
  Experience: number;
  location: string;
  manager: string;
}
const JobSchema = new mongoose.Schema<Job>(
  {
    title: { type: String, required: true },
    department: { type: String, required: true },
    jobtype: { type: String, required: true },
    expectedSalary: { type: Number, required: true },
    Experience: { type: Number, required: true },
    location: { type: String, required: true },
    manager: String,
  },
  {
    timestamps: true,
  }
);

const Jobmodel = mongoose.model<Job>("hiring", JobSchema);
export default Jobmodel;
