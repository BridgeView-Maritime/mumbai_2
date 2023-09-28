const express = require("express");
const ge = require("../models/getqote");
const contact = require("../models/getqote");
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
    "/getqote",
    
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
    "/getqote",
    
    async (req, res) => {
        console.log(req.body);
        const detials=contact(req.body);
        detials.save();
        res.send(req.body);
    }
  );
module.exports=router