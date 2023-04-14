function deleteUser(req, res) {
    const userId = Number(req.params.id);
    if (!userId) {
        return res.status(406).json({"mensagem": "Está faltando dados para concluir a operação."})
    }
    res.status(200).json({"mensagem": "Deletado com sucesso."})
};
module.exports = deleteUser;
