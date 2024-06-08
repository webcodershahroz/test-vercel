// server.mjs
const express = require('express')
const router = require('./routes/route')
const app = express()

app.use('/',router)

app.listen('4000',(req,res)=>{
  console.log("app is listing on port http://localhost:4000")
})
