const express = require('express')
const app = express()
const router = express.Router();
router.post('/signup',(req,res)=>{
    res.send('Hello world')
  
  })
  
module.exports = router;
