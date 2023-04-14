function createUser(req, res) {
    try {
       const user = {
        nome: req.body.nome,
        idade: req.body.idade,
        cargo: req.body.cargo,
        senha: req.body.senha
    };

    if (!user.nome || !user.idade || !user.cargo || !user.senha) {
        return res.status(406).send({"mensagem": "Está faltando dados para concluir a operação."});
    };

    if (user.idade < 21) {
        return res.status(401).json({"mensagem": "Usuário não possui idade suficiente."})
    };

    res.status(200).json({"mensagem": "Usuário criado com sucesso."}) 
    } catch (error) {
        console.log(error)
    }
};

module.exports = createUser;
