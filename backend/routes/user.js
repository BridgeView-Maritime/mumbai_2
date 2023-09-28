const express = require("express");
const User = require("../models/details");
const contact = require("../models/details");
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
    "/details",
    
    async (req, res) => {
        console.log(req.body);
        const detials=contact(req.body);
        detials.save();
        res.send(req.body);
    }
  );
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