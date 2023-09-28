const express = require("express");
const gen = require("../models/general");
const contact = require("../models/general");
const router = express.Router();







// Route2 -Authenticate user  api/auth/login
router.get('/',(req,res)=>{
    obj={
        a:"ro",
        number:34
    }
    res.json(obj)
})


router.post(
    "/general",
    
    async (req, res) => {
        console.log(req.body);
        const detials=contact(req.body);
        detials.save();
        res.send(req.body);
    }
  );

module.exports=router