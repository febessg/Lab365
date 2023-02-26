let price = document.getElementById('price');
let ul= document.getElementById('list');

let btn = document.getElementById('button');

console.log(price.value)

btn.addEventListener('click', (e) => {
    e.preventDefault();
    for (i = 1; i<51; i++) {
        let li = document.createElement('li');
        li.textContent = `${i} - R$ ${(i * price.value).toFixed(2)}`
        ul.appendChild(li);
    }
} )

function clean() {
    document.getElementById('price').value = " ";
    document.getElementById('list').innerHTML = " ";
}