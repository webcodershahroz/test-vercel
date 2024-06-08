// server.mjs
const express = require('express')
const app = express()
app.get('/',(req,res)=>{
  res.send('Hello world')

})

app.listen('3000',(req,res)=>{
  console.log("app is listing on port http://localhost:3000")
})
