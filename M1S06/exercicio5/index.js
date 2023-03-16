const express = require("express");

const app = express();

app.use(express.json());

app.post("/create", (req, res) => {
    const object = req.body;
    res.json(object);
})

app.listen(3333, () => {
    console.log("Servidor online!")
})