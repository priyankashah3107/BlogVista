import express from "express";
import cors from "cors";
import connectToMongoDb from "./db/connectToMongodb.js";
import UserModel from "./db/UserModel.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.routes.js';
import createPost  from "./controllers/createpost.controllers.js";
import multer from 'multer';
import fs from "fs"

const uploadMiddleware = multer({ dest: 'uploads/' });
import dotenv from 'dotenv';
import Post from "./db/Post.js";
dotenv.config();

const app = express()

// process.loadEnvFile();
// require('dotenv').config();
const port  = process.env.PORT || 8888;
app.use(cors({credentials: true, origin: "http://localhost:3003"}))
app.use(express.json())
app.use(cookieParser())

connectToMongoDb;

app.use('/', authRoutes )

app.post('/post', uploadMiddleware.single('file') , async (req, res) => {
    // res.json(req.files)
    // res.json({files: req.file})
    // finding the extention of the image which we we uploading 

    const {originalname, path } = req.file;
   const parts =   originalname.split('.');
   const findext = parts[parts.length - 1];
   const IMG = path+'.'+findext
  //  fs.renameSync(path, path+'.'+findext)
   fs.renameSync(path, IMG)
  //  res.json({findext, IMG}) 
   
  const {token} = req.cookies
  if(!token) {
   return res.status(401).json({msg: "Unauthorized Token"})
  }

  // JWt Verification 
  jwt.verify(token, process.env.JWT_SECRET,  async (err, info) => {
     if(err) {
       console.error(err.message)
       return res.status(401).json({msg: "Invalid Token"})
     }
     
        const {title, metaData, value } = req.body
  const PostInfo =  await Post.create({
     title,
     metaData,
     value,
     cover:IMG,
     author: info.id,

   })

  // res.json({title, metaData, value})
  res.json({msg: PostInfo})
     
    //  res.json(info)
  })

    
  //  const {title, metaData, value } = req.body
  // const PostInfo =  await Post.create({
  //    title,
  //    metaData,
  //    value,
  //    cover:IMG

  //  })

  // // res.json({title, metaData, value})
  // res.json({msg: PostInfo})
   
}) 


app.get("/post", async(req, res) => {
  const posts = await Post.find().populate('author', ['username'])
  res.json(posts)
})



app.listen(port, ()=> {
  
  // console.log(`App is running in PORT http://localhost:${port}`, process.env.PORT)
   console.log(`App is running in PORT http://localhost:${process.env.PORT}`)
})