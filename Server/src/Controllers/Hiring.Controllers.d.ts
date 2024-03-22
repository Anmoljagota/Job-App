import { Request, Response } from "express";
export interface Job extends Request {
    title: string;
    department: string;
    jobtype: string;
    expectedSalary: number;
    Experience: Date;
    location: string;
    manager: string;
}
declare const HiringDetails: (req: Request, res: Response) => Promise<void>;
export default HiringDetails;
