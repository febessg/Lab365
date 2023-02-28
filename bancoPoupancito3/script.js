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

    class ContaPoupanca extends Conta {
        constructor(saldo, deposito, retirada) {
            super(saldo, deposito, retirada)
        }

        deposito() {
            if (this.code == this.senha) {
             const valorDeposito = prompt("Quanto você quer depositar?")
             this.saldo = this.saldo + Number(valorDeposito);
            } else {
             alert("Senha incorreta. Tente novamente.")
            }
         };

        atualizaJuros() {
            console.log(this.saldo)
            let saldoAtualizado = this.saldo + (this.saldo*0.7)
            alert(`Seu saldo com juros é de ${saldoAtualizado}`)
        }
    }  

    class poupancaPremium extends ContaPoupanca {
        constructor(saldo, deposito, retirada, atualizaJuros) {
            super(saldo, deposito, retirada, atualizaJuros)
        }

        atualizaJuros() {
            console.log(this.saldo)
            let saldoAtualizado = this.saldo + (this.saldo*1.2)
            alert(`Seu saldo com juros é de ${saldoAtualizado}`)
        }
    }

    function definirOperacao() {

        let tipoConta = Number(prompt("Em qual conta você deseja operar? [1] Corrente [2] Poupança [3] Poupança Premium"));
        if (tipoConta === 1) {
            const operacao = Number(prompt("O que você deseja fazer? [1] deposito [2] retirada"));
            if (operacao === 1) { 
                let senhaDigitada = Number(prompt("Digite sua senha:"));
                let contaCorrente = new Conta(senhaDigitada);
                contaCorrente.deposito();
            } else if (operacao === 2) {
                let senhaDigitada = Number(prompt("Digite sua senha:"));
                let contaCorrente = new Conta(senhaDigitada);
                contaCorrente.retirada();  
            } else {
                alert("Operação não reconhecida. Tente novamente.")
            }
        } else if (tipoConta === 2) {
            const operacao = Number(prompt("O que você deseja fazer? [1] deposito [2] retirada"));
            if (operacao === 1) { 
                let senhaDigitada = Number(prompt("Digite sua senha:"));
                let poupanca = new ContaPoupanca(senhaDigitada);
                poupanca.deposito();
                poupanca.atualizaJuros();
            } else if (operacao === 2) {
                let senhaDigitada = Number(prompt("Digite sua senha:"));
                let poupanca = new ContaPoupanca(senhaDigitada);
                poupanca.retirada(); 
            } else {
                alert("Operação não reconhecida. Tente novamente.") 
            }
        } else if (tipoConta === 3) {
            const operacao = Number(prompt("O que você deseja fazer? [1] deposito [2] retirada"));
            if (operacao === 1) { 
                let senhaDigitada = Number(prompt("Digite sua senha:"));
                let poupanca = new poupancaPremium(senhaDigitada);
                poupanca.deposito();
                poupanca.atualizaJuros();
            } else if (operacao === 2) {
                let senhaDigitada = Number(prompt("Digite sua senha:"));
                let poupanca = new poupancaPremium(senhaDigitada);
                poupanca.retirada(); 
            } else {
                alert("Operação não reconhecida. Tente novamente.") 
            }
        } else {
            alert("Operação não reconhecida. Tente novamente.")
        }
    }
    
    definirOperacao()