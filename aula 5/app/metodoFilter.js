/*
  Lang EN = we create an element that selects all 'btn' classes from HTML
  -----------------------------------------------------------------------------------------------------------------------
  Lang PT-BR = criamos um elemento que seleciona todas as classes 'btn' do HTML
*/

const bntFiltro = document.querySelectorAll('.btn');
/*
  Lang EN = for each btn class we call a function that assigns the click event to the button and when this event happens it calls the function that filters the books 
  -----------------------------------------------------------------------------------------------------------------------
  Lang PT-BR = para cada classe btn chamamos uma função e que atribui ao botão o evento de click e quando esse evento acontece ele chama a função que filtra os livros 
*/
bntFiltro.forEach(btn => btn.addEventListener('click', filtraLivros))

/*
  Lang EN = creating the function that filters the books
  -----------------------------------------------------------------------------------------------------------------------
  Lang PT-BR = criando a função que filtra os livros
*/

function filtraLivros() {
  /*  
    Lanb EN = we create an element that selects the Id of each button and we also create another element that receives the value of the previous element
    ----------------------------------------------------------------------------------------------------------------------
    Lang PT-BR = criamos um elemento que seleciona o Id de cada botão e criamos também um outro elemento que recebe o valor do elemento anterior

  */
  const elmntBtn =  document.getElementById(this.id)
  const categoria =  elmntBtn.value

  /*
    Lang EN = creating the variable that checks if the category is available we filter the books by quantity, if it is not available we filter by category, the categories are each button, only the "Available Books" and "Order by price" buttons that differ from the others buttons because they do not represent a specific category, but if the book is available for purchase and what is the price order of the books respectively
    ----------------------------------------------------------------------------------------------------------------------
    Lang PT-BR = criando a variavel que faz a verificação se a categoria for disponivel filtramos os livros pela quantidade, se não for disponivel filtramos pela categoria, as categorias são cada botão, somente os botões "Livros Disponiveis" e "Ordenar por preço" que se diferem dos outros botões pois não representam uma categoria especifica, mas sim se o livro está disponivel pra compra e qual a ordem de preço dos livros respectivamente 
  */
  
  let livrosFiltrados = categoria == 'disponivel' ? filtroQuantidade() : filtraCategoria(categoria)
  /*
    Lang EN = calling the function that displays the books on the screen passing the filtered books as a parameter
    ------------------------------------------------------------------------------------------------------------------
    Lang PT-BR = chamando a função que exibe os livros na tela passando como parametro os livros que foram filtrados 
  */
  exibeLivros(livrosFiltrados)
  /*
    Lang EN = checks if the book category is available, if so, it assigns the variable "valorTotal" to the call of the function that adds the value of the books passing the filtered books as a parameter, this function is in the reduce.js file.
    It also calls the function that displays the span with the value of all available books, in the available category
    ----------------------------------------------------------------------------------------------------------------------
    Lang PT-BR = verifica se a categoria do livro é disponivel, se for ele atribui a variavel "valorTotal" a chamada da função que soma o valor dos livros passando como parametro os livros filtrados, essa função está no arquivo reduce.js. 
    Também chama a função que exibe o span com o valor de todos os livros disponiveis, na categoria de disponiveis 
  */
  if(categoria == 'disponivel') {
    const valorTotal = somaValor(livrosFiltrados)
    exibeValorTotal(valorTotal) 
  }
}
/*
  Lang EN = function that displays the span with the total value of the available books, the total value being calculated by the reduce method and assigned to the variable "valorTotal"
  -----------------------------------------------------------------------------------------------------------------------
  Lang PT-BR = função que exibe o span com o valor total dos livros disponiveis, sendo o valor total sendo calculado pelo metodo reduce e atribuido a variavel "valorTotal"
*/
function exibeValorTotal (valorTotal) {
  valorTotalDosLivrosDisponiveis.innerHTML = `
    
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
  
  `
}
/*
  Lang EN = The two functions below filter books, the first function filters books according to their category and the second function filters according to quantity, these functions are called within our filtering function in the variable "livrosFiltrados"
  ------------------------------------------------------------------------------------------------------------------------
  Lang PT-BR = As duas funções abaixo fazem a filtragem de livros, a primeira função filtra os livros de acordo com a categoria deles e a segunda função filtra conforme a quantidade, essas funções são chamadas dentro da nossa função de filtragem na variavel "livrosFiltrados"
*/

function filtraCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria);
}

function filtroQuantidade() {
  return livros.filter(livro => livro.quantidade > 0);
}