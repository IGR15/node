import { Request, Response } from "express";
import express from 'express';
import env from "dotenv";
import bookRoute from "./routes/book.js"
import AppDataSource from "./db/dbConfig.js";
import { customErrorHandler, DefaultErrorHandler } from "./Middleware/errorHandler.js";

const app = express();
env.config();
const PORT = process.env.PORT || 5000;
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
})


app.use("/books", bookRoute);
app.use(customErrorHandler)

app.use(DefaultErrorHandler)
AppDataSource.initialize().then(() => {
    console.log("Database connection is established successfully.");
}).catch(err => {
    console.log("faild to connect to Database");
});

app.listen(PORT, () => {
    console.log(`server is running on host: http://localhost:${PORT}`);

});

export default app;