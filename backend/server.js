const express = require("express")
const app = express()
const cors = require("cors");
const  connectToMongoDb  = require("./db/connectToMongodb.js");

// process.loadEnvFile();
require('dotenv').config();
const port  = process.env.PORT || 8888;
app.use(cors())
app.use(express.json())

app.post("/signup", (req, res) => {
 const {username, password} = req.body;
 res.json({requestData: {username, password}})
})



app.listen(port, ()=> {
  
  // console.log(`App is running in PORT http://localhost:${port}`, process.env.PORT)
   console.log(`App is running in PORT http://localhost:${process.env.PORT}`)
})