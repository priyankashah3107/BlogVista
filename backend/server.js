const express = require("express")
const app = express()
const cors = require("cors");
const  connectToMongoDb  = require("./db/connectToMongodb.js");
const UserModel = require("./db/UserModel.js");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
// generating a salt 
const salt = bcrypt.genSaltSync(10);
const cookieParser = require("cookie-parser")

// process.loadEnvFile();
require('dotenv').config();
const port  = process.env.PORT || 8888;
app.use(cors({credentials: true, origin: "http://localhost:3003"}))
app.use(express.json())
app.use(cookieParser())

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


app.post("/login", async (req, res) => {
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
      res.cookie('token', token).json("OK PRI");
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Internal server error" });
  }
});


app.get("/profile", (req, res) => {
   res.json(req.cookies)
})


// app.get("/profile", (req, res) => {
//   const token = req.cookies.token; // Access the 'token' cookie
//   if (!token) {
//     return res.status(401).json({ msg: "Unauthorized" });
//   }

//   // You can decode and verify the JWT token here if needed

//   res.json({ msg: "Profile accessed successfully" });
// });


app.listen(port, ()=> {
  
  // console.log(`App is running in PORT http://localhost:${port}`, process.env.PORT)
   console.log(`App is running in PORT http://localhost:${process.env.PORT}`)
})