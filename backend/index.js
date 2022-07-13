const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
.then(console.log("Connected to MongoDB!"))
.catch((err) => console.log(err));

app.use("/main",(req, res) => {
    console.log("Hello app!");
});

app.listen("8080", () => {
    console.log("Backend is running!");
});