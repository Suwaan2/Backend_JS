import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))//Setting the limits for the json files

app.use(express.urlencoded({extended: true, limit: "16kb"}))//Configure the files that are uploaded from the url

app.use(express.static("public"))//Public folder to set assests public

app.use(cookieParser())



export  {app}