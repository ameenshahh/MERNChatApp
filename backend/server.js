const express = require('express');
const dotenv = require("dotenv");
const { chats } = require('./data/data.js');
const connectDB = require('./config/db.js');

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
    res.send("API is running")
})
app.get("/api/chat", (req, res) => {
    res.send(chats)
})
app.get("/api/chat/:id", (req, res) => {
    // console.log(req.params.id)
    const singleChat = chats.filter(chat => chat._id === req.params.id);
    res.send(singleChat);
})

const PORT = process.env.PORT || 5000

app.listen(PORT, function(){
    console.log(`Server Started at http://localhost:${PORT}`)
})