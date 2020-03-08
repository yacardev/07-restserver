const jwt = require('jsonwebtoken');
//Verificar Token
let validateToken = (req, res, next) => {
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.user = decoded.user;
        next();
    });

};

// =====================
// Verifica AdminRole
// =====================
let validateAdmin = (req, res, next) => {

    let user = req.user;
    console.log('user: ' + user);

    if (user.role === 'ADMIN_ROLE') {
        next();
    } else {

        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }
};



module.exports = { validateToken, validateAdmin };