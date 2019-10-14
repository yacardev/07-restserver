const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');

const User = require('../models/users');


const app = express();

app.get('/users', function(req, res) {
    let from = req.query.from || 0;
    from = Number(from);

    let limit = req.query.limit || 5;
    limit = Number(limit);
    User.find({}, 'name email status google profile img')
        .where({ status: true })
        .skip(from)
        .limit(limit)
        .exec((err, DBusers) => {
            if (err) {
                //console.log('error: ', err);
                return res.status(400).json({
                    ok: false,
                    err
                })
            }

            User.countDocuments({ status: true }, (err, count) => {
                res.json({
                    ok: true,
                    DBusers,
                    qty: count
                });

            })

        });


});

app.post('/user', function(req, res) {
    let body = req.body;
    //console.log(req.body.name);

    let user = new User({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        profile: body.profile,
        status: body.status
            //google: body.google
    });

    user.save((err, DBuser) => {

        if (err) {
            //console.log('error: ', err);
            return res.status(400).json({
                ok: false,
                err
            })
        }

        //DBuser.password = null;
        res.json({
            ok: true,
            user: DBuser
        });

    });

});

app.put('/user/:id', function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['name', 'email', 'status', 'profile', 'img'])

    User.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, DBuser) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }


        res.json({
            ok: true,
            user: DBuser
        });

    })

});

app.delete('/user/:id', function(req, res) {
    let id = req.params.id;

    //Para borrar de la DB: User.findByIdAndRemove(id,(err,DBUserDel)=>{})
    let prop = {
        status: false
    };
    User.findByIdAndUpdate(id, prop, { new: true }, (err, DBUserDel) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        };
        if (!DBUserDel) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No existe el usuario'
                }
            })
        }

        res.json({
            ok: true,
            user: DBUserDel
        });

    })
});

module.exports = app;