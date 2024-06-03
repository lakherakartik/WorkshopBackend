const express = require('express')
const app=express();
const bodyParser=require('body-parser')
const bcrypt = require("bcrypt");

require("./models/mongoDBconnection.js").connectDB();
require("dotenv").config({ path: './.env' });

const logger = require('morgan');
app.use(logger("tiny"));

app.use(bodyParser.json())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));



app.use("/", require("./routes/userRoutes.js"));
app.use("/register", require("./routes/userRoutes.js"));
app.use("/verifyotp", require("./routes/userRoutes.js"));
app.use("/login", require("./routes/userRoutes.js"));
app.use("/logout", require("./routes/userRoutes.js"));
app.use("/forgotpassword", require("./routes/userRoutes.js"));
app.use("/resetpassword", require("./routes/userRoutes.js"));



app.listen(
    4000,
    console.log('Server is running on 4000')
)