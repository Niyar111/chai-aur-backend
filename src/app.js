import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.use(express.limited('50mb'));//to handle large payloads,means request body size limit is set to 50mb
app.use(express.urlencoded({ extended: true }).limit('50mb'));//to handle large payloads for urlencoded data
app.use(express.static('public'));//static files like images,css,js will be served from 'public' folder
app.use(cookieParser());//to parse cookies from incoming requests, making them accessible via req.cookies
app.use(express.json());//to parse incoming JSON requests and put the parsed data in req.body

export default app;
