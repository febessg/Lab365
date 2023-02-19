const number = document.getElementById("wppNumber");
const text = document.getElementById("message");

function generate() {
const link = `api.whatsapp.com/send?phone=${number.value}&text=${text.value}`;
const HTMLLink = document.getElementById('link')
HTMLLink.innerHTML = `<a href="${link}" target="blank" rel="external">Seu link</a>`
}