const express = require("express")
const app = express()
const cors = require("cors")

// process.loadEnvFile();
require('dotenv').config();
const port  = process.env.PORT || 8888;
app.use(cors())

app.get("/death", (req, res) => {
  res.json("death is the new Begining")
})


app.listen(port, ()=> {
  // console.log(`App is running in PORT http://localhost:${port}`, process.env.PORT)
   console.log(`App is running in PORT http://localhost:${process.env.PORT}`)
})