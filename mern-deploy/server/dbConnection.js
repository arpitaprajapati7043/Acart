// const mongoose=require('mongoose');
// const DB_URL=process.env.DB_URL;
// mongoose.connect(DB_URL).then(()=>console.log("connected to db successfully")).catch(err=>console.log(err));

// dbConnection.js
const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL;

const dbConnection = async () => {
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to the database successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

module.exports = dbConnection;
