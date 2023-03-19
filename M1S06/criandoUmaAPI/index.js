const express = require('express');
const app = express();

app.use(express.json());

const usersRoutes = require('./routes/users')

app.use('/users', usersRoutes)

app.listen(3333, () => {
    console.log('Servidor online!')
})