import { Request, Response } from "express";
import express from 'express';
import env from "dotenv";
import bookRoute from "./routes/book.js"
import AppDataSource from "./db/dbConfig.js";

const app = express();
env.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
})

app.use("/books", bookRoute);
AppDataSource.initialize().then(() => {
    console.log("Database connection is established successfully.");
}).catch(err => {
    console.log("faild to connect to Database");
});

app.listen(PORT, () => {
    console.log(`server is running on host: http://localhost:${PORT}`);
});

export default app;