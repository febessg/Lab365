function validarCargo(req, res, next) {
    const userCargo = req.body.cargo

    if (userCargo !== "líder") {
        return res.status(401).json({message: 'Usuário não autorizado'})
    } else {
        next()
    };
};

module.exports = validarCargo;
