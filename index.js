import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import cors from "cors"
import { dbConnection } from "./utils/dbConnection.js";
import { getMethod, postMethod } from "./controller/index.js";
const app = express();
dotenv.config({ path: ".env" })
const PORT = process.env.PORT;

// middlewares
app.use(bodyParser.json({ extended:true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// database middleware connection
app.use(async(req, res, next) => {
    await dbConnection();
    next();
})

//api routes for get and post request
app.get('/', getMethod)
app.post('/calculatecontributors', postMethod)

app.listen(PORT || 4000, async() => {
    dbConnection()
    console.log("backend server is running");
})