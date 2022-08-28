//Get
const listaProdutos = () => fetch("http://localhost:3000/produtos").then(resposta => resposta.json())

export const tProdutos = {
	listaProdutos,
}

function cadastrar(){
	open("produto.html");

}