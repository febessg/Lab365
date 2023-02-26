alert("Seja bem vindo ao PadariaTech");
let start = true;
let produtos = [];
let total = 0;
while (start) {
  const addProduct = prompt("Deseja adicionar um produto? sim [1] não [2]");
  if (addProduct == 1) {
    const nome = prompt("Digite o nome do produto:");
    const preco = prompt("Digite o preço do produto:");
    const quantidade = prompt("Digite a quantidade do produto:");
    const produto = {
      nome: nome,
      preco: Number(preco),
      quantidade: Number(quantidade),
    };

    produtos.push(produto);
  } else {
    produtos.forEach((produto) => {
      total = total + produto.preco * produto.quantidade;
    });
    start = false;
    alert(`O valor total do seu pedido é:${total.toFixed(2)}`);
    let dinheiro = Number(prompt("Digite a quantia em dinheiro:"));
    alert("Seu troco é "+(dinheiro-total));
    alert("Obrigado por comprar na PadariaTech. Volte sempre!");
    console.log(produtos);
  }
}