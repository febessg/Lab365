const express = require('express');

const app = express();

app.get('/:nome', (req, res) => {
    let name = req.params.nome;
    res.send(`Rota de API criada pelo(a): ${name}`)
} )

app.listen(3333, () => {
    console.log("Servidor online!")
})
