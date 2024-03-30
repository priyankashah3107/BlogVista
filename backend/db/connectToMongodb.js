const mongoose = require("mongoose");
require('dotenv').config(); 

const connectToMongoDb = mongoose.connect(process.env.MONGO_DB_URI)
                                .then(() => {
                                  console.log("Successfully Connected to MongoDB")
                                })
                                .catch((err) => {
                                  console.log("Error to connecting to mongodb", err.message);
                                })
                                

