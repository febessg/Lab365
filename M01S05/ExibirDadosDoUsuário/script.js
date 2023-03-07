
function showData() {
const users = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];

const fruits = ["Banana", "Morango", "Maçã", "Uva", "Pêra", "Laranja"];

let newFruits = [];

let result = [];

for (i=(fruits.length-1); i >= 0; i--) {
      newFruits.push(fruits[i])  
    }

for (i=0; i < users.length; i++) {
    result.push(users[i] + ' - ' + newFruits[i])
}


console.log(result)

}

showData()