import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./Database/db.js";
import routes from "./routes/route.js";


const app = express();
dotenv.config();
app.use(bodyParser.json(),{extended:true});
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
//routes
app.use('/',routes);
app.use('/uploads',express.static('uploads'))
const PORT =8000;
const username=process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password);
app.listen(PORT,()=>{
    console.log("server is running successfullly on port no 8000");}
)

