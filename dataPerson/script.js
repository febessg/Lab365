class Person {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    apresentar() {
        console.log(`Olá, me chamo ${this.nome}, tenho ${this.idade} anos e tenho ${this.altura} de altura.`)
    }
}

class Profissao extends Person {
    constructor(nome, idade, altura, profissao, apresentar) {
        super(nome, idade, altura, apresentar);
        this.profissao = profissao;
    }

    apresentar() {
        console.log(`Olá, me chamo ${this.nome}, tenho ${this.idade} anos, tenho ${this.altura} de altura e sou ${this.profissao}.`)
    }
}

const newPerson = new Profissao("Fernanda", 25, "1.66 cm", "Fisioterapeuta")

newPerson.apresentar();