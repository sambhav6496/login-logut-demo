const express = require("express");
const app = express();
const Joi = require("joi");
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json())
const path = require('path')
const auth =require('./api/auth/index')
const auth1 =require('./users/index')

app.use('/api', auth)
app.use('/api' , auth1 )

app.listen(3000,function(){
    console.log("listening on 3000")
})