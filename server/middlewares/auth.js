//Verificar Token
let validateToken = (req, res, next) => {
    let token = req.get('token');

    // res.json({
    //     token
    // });
    next();
}


module.exports = { validateToken };