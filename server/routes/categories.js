const express = require('express');
let { validateToken, validateAdmin } = require('../middlewares/auth');
let app = express();
let Categories = require('../models/categories');

//Mostrar todas las categorias
app.get('/categories', validateToken, (req, res) => {
    //res.json(res);
    Categories.find({})
        .sort('desc')
        .populate('user', 'name email')
        .exec((err, Categ) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }


            res.json({
                ok: true,
                categ: Categ
            });

        })
});

//Mostrar categoria por ID
app.get('/categories/:id', validateToken, (req, res) => {
    let id = req.params.id;

    Categories.findById(id, (err, CategDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }
            //(CategDB.equals("") || CategDB == null)
            if (!CategDB) {
                return res.status(500).json({
                    ok: false,
                    err: { message: 'No existe el ID.' }
                })
            }

            res.json({
                ok: true,
                categ: CategDB
            });

        })
        //res.json(res);
});

//Crear Categoria
app.post('/categories', validateToken, (req, res) => {
    let body = req.body;
    let Categ = new Categories({
        desc: body.desc,
        user: req.user._id
    });

    Categ.save((err, CategDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!CategDB) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            categ: CategDB
        });

    });
});

//Actualizar
app.put('/categories/:id', validateToken, (req, res) => {
    console.log('put categories: ');
    let id = req.params.id;
    let body = req.body;
    let catDesc = { desc: body.desc };
    console.log('desc: ' + body.desc);
    Categories.findByIdAndUpdate(id, catDesc, { new: true }, (err, categUpd) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!categUpd) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            categ: categUpd
        });
    })


});

//Borrar
app.delete('/categories/:id', [validateToken, validateAdmin], (req, res) => {
    let id = req.params.id;

    Categories.findByIdAndRemove(id, (err, DBCategDel) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        };
        if (!DBCategDel) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No existe la categoria'
                }
            })
        }

        res.json({
            ok: true,
            message: "Categoria Borrada."
        });

    })


})




module.exports = app;