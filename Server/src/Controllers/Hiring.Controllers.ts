import { Request, Response } from "express";
import Jobmodel from "../Modals/HiringDetails";
export interface Job extends Request {
  title: string;
  department: string;
  jobtype: string;
  expectedSalary: number;
  Experience: Date;
  location: string;
  manager: string;
}
const HiringDetails = async (req: Request, res: Response) => {
  try {
    const savedetails = new Jobmodel(req.body);
    savedetails.save();
    res.status(200).json({ message: "job posted successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export default HiringDetails;
