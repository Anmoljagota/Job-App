import HiringDetails from "../Controllers/Hiring.Controllers";
import express from "express";
const hiringRoute = express.Router();
hiringRoute.post("/jobdetails", HiringDetails);

export default HiringDetails;
