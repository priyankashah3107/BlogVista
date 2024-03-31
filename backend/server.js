const express = require("express")
const app = express()
const cors = require("cors");
const  connectToMongoDb  = require("./db/connectToMongodb.js");
const UserModel = require("./db/UserModel.js");
const bcrypt = require('bcryptjs');

// generating a salt 
const salt = bcrypt.genSaltSync(10);

// process.loadEnvFile();
require('dotenv').config();
const port  = process.env.PORT || 8888;
app.use(cors())
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



app.listen(port, ()=> {
  
  // console.log(`App is running in PORT http://localhost:${port}`, process.env.PORT)
   console.log(`App is running in PORT http://localhost:${process.env.PORT}`)
})