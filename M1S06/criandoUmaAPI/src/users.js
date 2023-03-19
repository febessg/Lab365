const express = require('express');
const router = express.Router();

router.post('/addUser', (req, res) => {
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
})
