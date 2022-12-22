/*
   Lang EN = we create an element that takes the id of books to be able to manipulate its HTML in the function
   -----------------------------------------------------------------------------------------------------------
   Lang PT-BR = criamos um elemento que pega o id livros para poder manipular o HTML dele na função 
*/
const insereLivros = document.getElementById('livros')

/*
   Lang EN = we create an element to select the id of the available books to manipulate them in filtering elements
   ----------------------------------------------------------------------------------------------------------------------
   Lang PT-BR = criamos um elemento para selecionar o id dos livros disponiveis para manipula-los na filtragem de elementos
*/
const valorTotalDosLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

/*
   Lang EN = We create the function that displays the books on the screen passing as an argument our constant that selects the id 'books'
   -----------------------------------------------------------------------------------------------------------------------
   Lang PT-BR = Criamos a função que exibe os livros na tela passando como argumento nossa constante que seleciona o id 'livros'
*/

function exibeLivros(listaDeLivros) {
   /*
      Lang EN = we manipulate our variable so that as soon as the books are loaded it does not display our banner instantly but waits until the filtering condition is met
      --------------------------------------------------------------------------------------------------------------------
      Lang PT-BR = manipulamos o a nossa variavel para que assim que os livros forem carregados ela não exiba o nosso baner instantaneamente mas espere até que a condição de filtragem seja respondida 
   */
   valorTotalDosLivrosDisponiveis.innerHTML = ''

   /*
      Lang EN = We set the element that places the books on the screen initially empty
      ------------------------------------------------------------------------------------------------------------
      Lang PT-BR = Definimos o elemento que insere os livros na tela inicialmente vazio 
   */
   insereLivros.innerHTML = ''

   /*
      Lang EN = we create a repeating loop for each book on our list and checking availability and displaying the books
      --------------------------------------------------------------------------------------------------------------------
      Lang PT-BR = criamos um laço de repetição para cada livro da nossa lista e fazendo a verificação disponiblidade e a exibição dos livros  
   */
   listaDeLivros.forEach(livro => { 
      /*
         Lang EN = checks the availability of books, if the number of books is greater than 0 we display the image of the book if it is less than zero it will display the image of the book and will add the class that will make the opacity different
         -----------------------------------------------------------------------------------------------------------------
         Lang PT-BR = verifica a disponibilidade dos livros, se a quantidade dos livros for maior que 0 exibimos a imagem do livro se for menor que zero ele ira exibira a imagem do livro e irá acrescentar a classe que deixará a opacidade diferente
      */
      let disponibildade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'

      /*
         Lang EN = we make our element that inserts the books on the page insert the books, defining only the book and searching the api for each of its elements, title, author, price, cover, and the class of the image depends on the condition of the variable that verifies the availability
         ----------------------------------------------------------------------------------------------------------------- 
         Lang PT-BR = fazemos a nosso elemento que insere os livros na pagina inserir os livros, definindo apenas o livro e buscando da api cada um dos seus elementos, de titulo, autor, preço, capa, sendo que a classe da imagem depende da condição da variavel que verifica a disponibilidade
      */
      insereLivros.innerHTML += `
         
         <div class="livro">
            <img class="${disponibildade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
               ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
            <p class="livro__quantidade" id="qntd">${'Quantidade:' + ' ' + livro.quantidade} </p>
            <div class="tags">
               <span class="tag">${livro.categoria}</span>
            </div>
         </div>
         
      ` 
   });
}

/*
   Lang EN = 
   Lang PT-BR =

   function verificaDisponibilidade (livro) {
      if(livro.quantidade > 0) {
         return 'livro__imagens'
      } else {
         return 'livro__imagens indisponivel'
      }
   }
 
*/
