import express from "express";
import cors from "cors";
import connectToMongoDb from "../db/connectToMongodb.js"
import UserModel from "../db/UserModel.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
// generating a salt 
const salt = bcrypt.genSaltSync(10);
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
dotenv.config();

// process.loadEnvFile();
// require('dotenv').config();
// const port  = process.env.PORT || 8888;
// app.use(cors({credentials: true, origin: "http://localhost:3003"}))
// app.use(express.json())
// app.use(cookieParser())

connectToMongoDb;

export const singnup = async (req, res) => {
  const {username, password} = req.body;
  var hash = bcrypt.hashSync(password, salt);
 
  try{
   // const UserDoc =  await UserModel.create({username, password})
   const UserDoc =  await UserModel.create({username, 
     password: hash
   })
   //  res.json({requestData: {username, password}})
   res.json(UserDoc)
  } catch (err) {
   res.status(400).json({msg: err.message})
  }
}
 

export const login =  async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ msg: "Invalid password" });
    }
    // Generating JWT token
    jwt.sign({ username, id: user._id }, process.env.JWT_SECRET, (err, token) => {
      if (err) throw err;
      // Setting the token as a cookie
      res.cookie('token', token).json({
        id:user._id,
        username
      });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Internal server error" });
  }
}

export const profile = (req, res) => {
  const {token} = req.cookies
   if(!token) {
    return res.status(401).json({msg: "Unauthorized Token"})
   }
   // JWt Verification 
   jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
      if(err) {
        console.error(err.message)
        return res.status(401).json({msg: "Invalid Token"})
      } 
      res.json(info)
   })
  }

  export  const logout = (req, res) => {
    res.clearCookie('token').json("Hello Universe")
  }
  

  // export const create = (req, res) => {
  //   res.json("Hello")
  // }