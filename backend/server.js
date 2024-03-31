const express = require("express")
const app = express()
const cors = require("cors");
const  connectToMongoDb  = require("./db/connectToMongodb.js");
const UserModel = require("./db/UserModel.js");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
// generating a salt 
const salt = bcrypt.genSaltSync(10);

// process.loadEnvFile();
require('dotenv').config();
const port  = process.env.PORT || 8888;
app.use(cors({credentials: true, origin: "http://localhost:3003"}))
app.use(express.json())

connectToMongoDb;

app.post("/signup", async (req, res) => {
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

})


app.post("/login", async(req, res) => {
  try{
    const {username , password} = req.body;
    const user = await UserModel.findOne({username})
    if(!user) {
      return res.status(404).json({msg: "User not Found"})
    } 
    const isPasswordValid = bcrypt.compareSync(password, user.password); // true
    // if(!isPasswordValid) {
    //   return res.status(404).json({msg: "Wrong password"})
    // }
    if(isPasswordValid) {
      // generating the hash 
      jwt.sign({username, id:user._id}, process.env.JWT_SECRET, {}, (err, token) => {
        if(err) throw err;
        res.json(token)
      })
    }
    res.json(user)
  } catch(err) {
    console.log(err.message)
     res.status(400).json({msg: err.message})
  }
 
})



app.listen(port, ()=> {
  
  // console.log(`App is running in PORT http://localhost:${port}`, process.env.PORT)
   console.log(`App is running in PORT http://localhost:${process.env.PORT}`)
})