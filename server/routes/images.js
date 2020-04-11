const express = require('express');
const fs = require('fs');
const path = require('path');
const { validateImgToken } = require('../middlewares/auth');

let app = express();


app.get('/images/:type/:img', validateImgToken, (req, res) => {
    let type = req.params.type;
    let img = req.params.img;
    let absPath = path.resolve(__dirname);
    let noImagePath = path.resolve(__dirname, '../assets');
    let imgPath = path.resolve(__dirname, `../../uploads/${type}/${img}`);

    if (fs.existsSync(imgPath)) {
        res.sendFile(imgPath);
    } else {
        res.sendFile(`${noImagePath}/not-found.jpeg`);
    }

    console.log('path abs: ' + absPath);



})










module.exports = app;