
import dotenv from "dotenv";
dotenv.config({path: "./.env"});

import connectDB from "./db/index.js";


connectDB();

// import express from "express";
// const app = express();
// ;(async ()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${'DB_NAME'}`);
//         app.on("error",()=>{
//             console.log("ERR:",error);//to ensure that the our express is talking with database.
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is connect with port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR:",error);
//         throw error;
//     }
// })()