(async() => {
    const express = require('express');

const app = express();

app.use(express.json());

const database = require('./db');

const Cliente = require('./cliente');
    
database.sync();


    await Cliente.create({
    name: 'Maria',
    cpf: '11122233344'
    })


app.listen(3333, () => {
    console.log('Servidor online')
})

}) ();