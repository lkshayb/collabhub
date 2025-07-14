const express = require('express');
const app = express();
const PORT = 3000;
require('dotenv').config();
const authRoutes = require('./routes/auth')
const POSTGRES_URL = process.env.POSTGRES_URL
app.use(express.json());

app.get("/ping",(req,res) => {
    res.send("SERVER IF RUNNING");
    console.log(POSTGRES_URL)
})

app.use('/auth',authRoutes)



app.post("/create-session",(req,res) => {
    res.send("WELCOME TO CREATE SESSION ROUTE");
})

app.get("/join-session",(req,res) => {
    res.send("WELCOME TO JOIN SESSION ROUTE");
})

app.listen(PORT, (err,data) => {
    console.log("server is running on port: ",PORT)
});