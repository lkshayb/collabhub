const express = require('express');
const router = express.Router();
const {add_data} = require('../db-queries');
router.post("/signup",(req,res) => {
    // user send data in post request
    const username = req.body.username;
    const password = req.body.password;
    
    

    add_data("users",{
        username:username,
        password:password
    })

    res.send("WELCOME TO SIGNUP ROUTE");
})

router.post("/login",(req,res) => {
    res.send("WELCOME TO LOGIN ROUTE");
})

router.post("/logout",(req,res) => {
    res.send("WELCOME TO LOGOUT ROUTE");
})

module.exports = router