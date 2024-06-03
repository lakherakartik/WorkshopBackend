const express = require('express');
const app = express.Router();
const {homepage,UserRegister,VerifyOTP,UserLogin,UserLogout,ForgotPassword,ResetPassword} = require('../controllers/userAuthentication')


app.get('/',homepage);
app.post('/register',UserRegister);
app.post('/verifyotp',VerifyOTP);
app.post('/login',UserLogin);
app.post('/logout',UserLogout);
app.post('/forgotpassword',ForgotPassword);
app.post('/resetpassword',ResetPassword);


module.exports=app;
