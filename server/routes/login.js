const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/users');
const app = express();
const jwt = require('jsonwebtoken');

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);


//console.log('login');

app.post('/login', (req, res) => {

    let body = req.body;
    User.findOne({ email: body.email }, (err, DBUser) => {

        if (err) {
            //console.log('error: ', err);
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!DBUser) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Error de validacion. Verificar user/pass.'
                }
            })
        }

        if (!bcrypt.compareSync(body.password, DBUser.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Error de validacion. Verificar user/pass.'
                }
            })
        }

        let token = jwt.sign({
            user: DBUser
        }, process.env.SEED, { expiresIn: process.env.TOKEN_DUE_DATE });

        res.json({
            ok: true,
            user: DBUser,
            token
        });

    });



});

async function verify(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();

    return {
        name: payload.name,
        email: payload.email,
        pic: payload.picture,
        google: true
    }
}
//verify().catch(console.error);

//Configuraciones de Google
app.post('/google', async(req, res) => {
    let token = req.body.idtoken;
    console.log('Verifiy token:' + token);
    let googleUser = await verify(token)
        .catch(e => {
            console.log('Error verifiy token');
            return res.status(403).json({
                ok: false,
                err: e
            })
        });

    User.findOne({ email: googleUser.email }, (err, DBUser) => {
        if (err) {
            //console.log('error: ', err);
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (DBUser) {

            if (DBUser.google === false) {

                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'Ya se encuentra registrado pero no con el signIn de google.'
                    }
                });

            } else {
                let token = jwt.sign({
                    user: DBUser
                }, process.env.SEED, { expiresIn: process.env.TOKEN_DUE_DATE });

                return res.status(200).json({
                    ok: true,
                    user: DBUser,
                    token
                })
            }

            // return res.status(400).json({
            //     ok: false,
            //     err: {
            //         message: 'Error de validacion. Verificar user/pass.'
            //     }
            // });
        } else {
            //el usuario no exite. Se crea.
            console.log('Se crea usuario.');
            let user = new User();
            user.name = googleUser.name;
            user.email = googleUser.email;
            user.img = googleUser.pic;
            user.google = true;
            user.password = ':)';
            user.status = true;

            user.save((err, DBUser) => {
                if (err) {
                    console.log('Error crea usuario.');
                    //console.log('error: ', err);
                    return res.status(500).json({
                        ok: false,
                        err
                    })
                }

                let token = jwt.sign({
                    user: DBUser
                }, process.env.SEED, { expiresIn: process.env.TOKEN_DUE_DATE });

                return res.status(200).json({
                    ok: true,
                    user: DBUser,
                    token
                });
            })
        }


    })

    // res.json({
    //     user: googleUser
    // });
});




module.exports = app;