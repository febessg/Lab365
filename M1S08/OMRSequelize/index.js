(async() => {
    const express = require('express');

const app = express();

app.use(express.json());

const database = require('./db');

const Cliente = require('./cliente');
    
database.sync();

//Criando dados na tabela
    await Cliente.create({
    name: 'Maria',
    cpf: '11122233344'
    })

//Alterando dados da tabela
    const clientes = await Cliente.findByPk(1);

    clientes.name = 'Maria Rita';

    await clientes.save();

app.listen(3333, () => {
    console.log('Servidor online')
})

}) ();
