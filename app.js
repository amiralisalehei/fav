const express = require('express');
const serveFavicon = require('serve-favicon');
const app = express();
const path = require('path')
app.use(serveFavicon(path.join(__dirname, "assassinscreed.png")))
app.get("/", (req,res) => {
    res.json({
        message: "hello fav icon",
        data: req.url
    })
})
app.listen(3000, () => {
    console.log("http://localhost:3000");
    
})