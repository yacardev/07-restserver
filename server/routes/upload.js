const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const User = require('../models/users');
const Product = require('../models/products')
const fs = require('fs');
const path = require('path');

// default options
app.use(fileUpload());

app.put('/upload/:type/:id', (req, res) => {
    let type = req.params.type;
    let id = req.params.id;
    let validTypes = ['users', 'products'];

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            err: { message: 'No se seleccino archivo' }
        });
    };

    if (validTypes.indexOf(type) < 0) {
        return res.status(400).json({
            ok: false,
            message: type + ': no permitido. Tipos validos: ' + validTypes.join(',')
        })
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file

    let fileUp = req.files.file;
    let allExtensions = ['png', 'jpg', 'pdf', 'gif', 'doc', 'docx', 'xls', 'jpeg'];
    let sPlitFileName = fileUp.name.split('.');
    let fileEx = sPlitFileName[sPlitFileName.length - 1];
    console.log(fileEx);

    if (allExtensions.indexOf(fileEx) < 0) {
        return res.status(400).json({
            ok: false,
            message: fileEx + ': no permitido. Archivos validos: ' + allExtensions.join(',')
        })
    }

    //change file name
    let fileName = `${id}.${ new Date().getMilliseconds() }.${fileEx}`;

    //return;
    // Use the mv() method to place the file somewhere on your server
    fileUp.mv(`uploads/${type}/${fileName}`, (err) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: err
            });
        }
        if (type == 'users') userImage(id, res, fileName, type);

        if (type == 'products') productImage(id, res, fileName, type);
        /*
                res.json({
                    ok: true,
                    message: 'Archivo subido.'
                });*/
    });

});

function userImage(id, res, fileName, path) {
    User.findById(id, (err, dbUser) => {
        if (err) {
            //console.log('No existe usuario. Imagen: ' + fileName);
            deleteFile(fileName, path);
            return res.status(500).json({
                ok: false,
                message: err
            });
        }
        if (!dbUser) {
            deleteFile(fileName, path);
            return res.status(400).json({
                ok: false,
                err: { message: 'Usuario no valido. ' }
            });
        }

        deleteFile(dbUser.img, path);

        dbUser.img = fileName;
        dbUser.save((err, usrSave) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    message: err
                });
            }
            res.json({
                ok: true,
                usuario: usrSave,
                img: fileName
            })

        })

    })

}

function productImage(id, res, fileName, path) {
    Product.findById(id, (err, dbProduct) => {
        if (err) {
            console.log('No existe producto. Imagen: ' + fileName);
            deleteFile(fileName, path);
            return res.status(500).json({
                ok: false,
                message: err
            });
        }
        if (!dbProduct) {
            deleteFile(fileName, path);
            return res.status(400).json({
                ok: false,
                err: { message: 'Producto no valido. ' }
            });
        }

        deleteFile(dbProduct.img, path);

        dbProduct.img = fileName;
        dbProduct.save((err, prdSave) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    message: err
                });
            }
            res.json({
                ok: true,
                product: prdSave,
                img: fileName
            })

        })
    })
} //productImage

function deleteFile(file, type) {
    console.log('Borrar imagen: ' + file);
    let imgPath = path.resolve(__dirname, `../../uploads/${type}/${file}`);
    if (fs.existsSync(imgPath)) {
        fs.unlinkSync(imgPath);
    }
}

module.exports = app;