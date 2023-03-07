
function addUser(users) {

const list = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];

for (const user of users ) {
    if (typeof user !== "string") {
        console.error("Valor inválido. Insira um nome.")
    } else if (list.includes(user)) {
        console.error(`O usuário ${user} já existe.`)
    } else {
        list.push(user)
    }
}

console.log(list)

}

addUser(['Maria', 'Pedro', 123, 'Sara'])