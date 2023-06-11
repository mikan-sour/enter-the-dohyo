import express from "express";
import dotenv from 'dotenv';

import router from "./router";

dotenv.config();

const app = express();
const port = process.env.APP_PORT;

app.use(express.static("public"));
app.use("/", router)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
