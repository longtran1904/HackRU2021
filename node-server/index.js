require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const app = express()
const PORT = process.env.PORT || 3000;
const router = require("express").Router()
const cors = require("cors")
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cors());
app.use("/",router)

// connect to mysql 
const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME 
});

mysqlConnection.connect((err) => {
    if (!err){
        console.log("connection success");
    }
    else console.log(err);
})

// // Router here!
// const courseRoutes = require("./routes/course");

// // Route
// router.use('/courses',courseRoutes);


app.listen(PORT,() => console.log(`App is running on ${PORT}`));

