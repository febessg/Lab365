
function deleteData() {
const list = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitória', 'Luís', 'Danilo', 'José'];

let newList = [];
let duplicados = [];

for (i=0; i < list.length; i++) {
    if (!newList.includes(list[i])) {
        newList.push(list[i])
    } else {
        duplicados.push(list[i])
    }
}
    
console.log((duplicados.join()), newList)

}

deleteData();





