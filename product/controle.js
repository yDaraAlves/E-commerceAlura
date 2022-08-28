import { tProdutos } from "./produto-serviço.js";

const AddProdutos = ( name, price,imageUrl) => {
	const card = document.createElementc("div");
    const conteudo = `
	<div class="listprodutos">
	    <img src="${imageUrl}" alt="">
        <h1>${name}</h1>
        <p class="preço">${price}</p>
        <a href="">Ver Produto</a>
       </div>

	   `
	   card.innerHTML = conteudo
	   return card
}
const produtos = document.querySelector("[data-product]")

const render = async() => {
	try{
		const listaProdutos= await tProdutos.listaProdutos()
		listaProdutos.forEach(elemento => {
			produtos.appendChild(AddProdutos(elemento.name, elemento.price, elemento.imageUrl))
		});

	}
	catch(erro){
		console.log(erro)
	}
	
}
render()