import express from "express";
import connection from "./src/Config/db";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log("error", err);
  }
  console.log(`server is listening on port ${process.env.PORT}`);
});
