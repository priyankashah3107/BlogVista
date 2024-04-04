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

import path from "path";
const app = express()

// process.loadEnvFile();
// require('dotenv').config();
const port  = process.env.PORT || 8888;
app.use(cors({credentials: true, origin: "http://localhost:3003"}))
app.use(express.json())
app.use(cookieParser())

const __dirname = path.resolve();

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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

   
}) 




app.get("/post", async(req, res) => {
  const posts = await Post.find()
                .populate('author', ['username'])
                .sort({createdAt: -1})
                .limit(20)

  res.json(posts)
})


app.put("/post", uploadMiddleware.single('file'), async (req, res) =>  {
  let IMG = null
  if(req. file) {
    const {originalname, path } = req.file;
    const parts =   originalname.split('.');
    const findext = parts[parts.length - 1];
      IMG = path+'.'+findext
    fs.renameSync(path, IMG)
  }

  const {token } = req.cookies
  if(!token) {
    return res.status(401).json({msg: "Unauthorized Token"})
   } 

   jwt.verify(token, process.env.JWT_SECRET,  async (err, info) => {
    if(err) {
      console.error(err.message)
      return res.status(401).json({msg: "Invalid Token"})
    }
    
    const {title, metaData, value, postId} = req.body
    const PostDoc = await Post.findById(postId);
    const isAuthor = JSON.stringify(PostDoc.author) === JSON.stringify(info.id);
    // res.json(isAuthor)
  
    if(!isAuthor) {
      return res.status(400).json({msg: "You are not thr author"})
    }

    await PostDoc.updateOne({
      title,
      metaData,
      value,
      cover: IMG ? IMG : PostDoc.cover,
    })
    
   res.json(PostDoc)
 })
  
})

app.get('/post/:id', async(req, res) => {
   const {id} = req.params;
  //  res.json(id)
  const postInfo = await Post.findById(id).populate('author', ['username'])
  res.json(postInfo)
})


app.listen(port, ()=> {
  
  // console.log(`App is running in PORT http://localhost:${port}`, process.env.PORT)
   console.log(`App is running in PORT http://localhost:${process.env.PORT}`)
})