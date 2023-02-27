class Conta {
    #senha;
    constructor (code) {
        this.saldo = 500;
        this.#senha = 1234;
        this.code = code;
    }

    get senha() {
        return this.#senha;
    }

    deposito() {
       if (this.code == this.senha) {
        const valorDeposito = prompt("Quanto você quer depositar?")
        this.saldo = this.saldo + Number(valorDeposito);
        alert(`Seu saldo é de ${this.saldo}`)
       } else {
        alert("Senha incorreta. Tente novamente.")
       }
    };

    retirada() {
        if (this.code == this.senha) {
            alert(`Seu saldo é de ${this.saldo}.`)
            const valorRetirada = prompt("Quanto você quer retirar?")
            this.saldo = this.saldo - Number(valorRetirada);
            alert(`Seu saldo é de ${this.saldo}`)
           } else {
            alert("Senha incorreta. Tente novamente.")
           }
        };
    };

function definirOperacao() {
    const operacao = Number(prompt("O que você deseja fazer? [1] deposito [2] retirada"));

    if (operacao === 1) { 
        let senhaDigitada = Number(prompt("Digite sua senha:"));
        let contaCorrente = new Conta(senhaDigitada);
        contaCorrente.deposito();
    } else if (operacao === 2) {
        let senhaDigitada = Number(prompt("Digite sua senha:"));
        let contaCorrente = new Conta(senhaDigitada);
        contaCorrente.retirada();
    }
}

definirOperacao()


