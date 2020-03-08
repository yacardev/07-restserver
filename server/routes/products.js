const express = require('express');
let { validateToken } = require('../middlewares/auth');

let app = express();
let Products = require('../models/products');

//Get all products
app.get('/products', validateToken, (req, res) => {
    Products.find({})
        .sort('name')
        .populate('user category', 'name email desc')
        .exec((err, Products) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    message: err
                })
            };

            res.json({
                ok: true,
                Products
            })
        })


});

//Get products by ID
app.get('/products/:id', validateToken, (req, res) => {
    let id = req.params.id;
    Products.findById(id)
        .populate('user', 'name email')
        .populate('category', 'desc')
        .exec((err, Products) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    message: err
                })
            };

            res.json({
                ok: true,
                Products
            })
        })


});

//Get by Name
app.get('/products/search/:name', validateToken, (req, res) => {
    let name = req.params.name;
    Products.find()
        .populate('user', 'name email')
        .populate('category', 'desc')
        .where({ name: RegExp(name, 'i') })
        .exec((err, Products) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    message: err
                })
            };

            res.json({
                ok: true,
                Products
            })
        })


});


//POST products
app.post('/products', validateToken, (req, res) => {
    let body = req.body;
    let NewProd = new Products({
        name: body.name,
        unitPrice: body.unitprice,
        desc: body.desc,
        available: body.available,
        category: body.category,
        user: req.user._id

    });

    NewProd.save((err, NewProduct) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            NewProduct
        })
    });
});

//PUT products by ID
app.put('/products/:id', validateToken, (req, res) => {
    let id = req.params.id;
    let body = req.body;
    let name = { name: body.name };

    Products.findByIdAndUpdate(id, name, { new: true }, (err, UdpProduct) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: err
            })
        };

        res.json({
            ok: true,
            UdpProduct
        })
    })
});

//Borrar, actualiza el estado a false
app.delete('/products/:id', validateToken, (req, res) => {
    let id = req.params.id;
    let status = { status: false };
    Products.findByIdAndUpdate(id, status, { new: true })
        .exec((err, UdpProduct) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    message: err
                })
            };

            res.json({
                ok: true,
                UdpProduct
            })
        })
});

module.exports = app;