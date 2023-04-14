const Router = require('express');

const validarCargo = require('../middlewares/validarCargo');

const createUser = require("../controller/createUser");
const deleteUser = require("../controller/deleteUser");

const routes = new Router();

/* router.post('/addUser', (req, res) => {
    const object = req.body;
    res.json(object);
})

router.delete('/deleteUser/:id', (req, res) => {
    let deletedUser = users.filter((user) => {
        return user.id == req.params.id;
    })

    if (deletedUser) { 
        res.status(200).send("Usuário deletado.")
    } else {
        res.status(404).send('Usuário não encontrado.')
    }
}) */

routes.post('/addUser', validarCargo, createUser);
routes.delete('/deleteUser/:id', deleteUser);

module.exports = routes;
