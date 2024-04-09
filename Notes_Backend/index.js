const express = require('express');
const cors = require('cors');
const { connection } = require('./db.js');
const { userRouter } = require('./routes/user.routes');
const { noteRouter } = require('./routes/note.routes');
require('dotenv').config();
const port = process.env.PORT
const app = express()
app.use(cors(
    {
        origin: ["https://notes-app-front-end-mocha.vercel.app"],
        methods:["POST","GET","PATCH","DELETE"],
        credentials:true
    }
))
app.use(express.json())
app.use("/user",userRouter)
app.use("/note",noteRouter)

app.get("/",(req,res)=>{
    res.send({
        message:"api is working now"
    })
})


app.listen(port,async()=>{
    try{
        await connection;
        console.log("database connected");
    } catch(err){
        console.log("Error connecting to the database", err)
    }
    console.log("Server is running on port", port)
})