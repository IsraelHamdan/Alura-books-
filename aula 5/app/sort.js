/*
  Lang EN = we create an element that selects the ID of the button that does the sorting by price, then adding a click event to call the function that sorts the books by price, using the Sort method, on the page the books are displayed in ascending order of price, inside the function that sorts by price also calls the function that displays the books on the screen, so we will always display the books according to the filtering we want, either by category or by price
  ------------------------------------------------------------------------------------------------------------------------
  Lang PT-BR = criamos um elemento que seleciona o ID do botão que faz a ordenação por preço, depois adicionando um evento de click para chamar a função que ordena os livros por preço, pelo metodo Sort, na página é exibido os livros em ordem crescente de preço, dentro da função que faz a ordenação por preço também acontece a chamada da função que faz a exibição dos livros na tela, sendo assim sempre exibiremos os livros de acordo com a filtragem que queremos, seja por categoria, ou por preço 
*/


let bntOrdenar = document.getElementById('btnOrdenarPorPreco')

bntOrdenar.addEventListener('click', ordenaPreco)

function ordenaPreco() {
   let livrosSort = livros.sort((a,b) => a.preco - b.preco)
   exibeLivros(livrosSort)
}