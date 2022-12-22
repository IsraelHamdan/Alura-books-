/*
  Lang EN = we simply use the reduce method with an accumulator and another object, making the sum of the price of all books and displaying them in the span in the "available" category
  -----------------------------------------------------------------------------------------------------------------------
  Lang PT-BR = simplismente usamos o metodo reduce com um acumulador e outro obejeto, fazendo a soma do preço de todos os livros e exibindo no span na categoria "disponivel" 
*/


function somaValor (livros) {
   return livros.reduce((acc, livro) =>  acc + livro.preco, 0).toFixed(2)
}