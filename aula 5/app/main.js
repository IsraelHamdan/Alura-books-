/*
   Lang EN =  We create an array to store our books 
   Lang PT-BR = Criamos um array para guardar os livros
*/
let livros = []; 

/*
   Lang EN =  We make the JSON API request
   Lang PT-BR = Fazemos a requisição da API JSON 
*/
const req = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

/*
   Lang EN =  we call the asynchronous function that puts the api books in the array and calls the synchronous function that displays our books on the screen having our array as a parameter
   -------------------------------------------------------------------------------------------------------------------
   Lang PT-BR = chamamos a função assincrona que coloca os livros da api no array e chama a função sincrona que exibe nossos livros na tela tendo como parametro o nosso array
*/
getBuscaLivros ()

async function getBuscaLivros() {
   /*
      Lang EN =   the variable "aws" wait for the request made on line 13
      --------------------------------------------------------------------
      Lang PT-BR = a variavel "aws" esperar a requisição feita na linha 13
   */
   const aws = await fetch(req)

   /*
      Lang EN = the books array expects the constant "aws" and transforms it into json format
      ---------------------------------------------------------------------------------------
      Lang PT-BR = o array livros espera a constante "aws" e transforma ela em formato json 
   */
   livros = await aws.json()

   /*
      Lang EN = we call the function that displays the books and pass our array of books as a parameter, this function is defined in the metodoForEach.js file
      -------------------------------------------------------------------------------------------------------------------
      Lang PT-BR = chamamos a função que exibe os livros e passamos como parametro o nosso array de livros, esta função está definda no arquivo metodoForEach.js
   */
   exibeLivros(livros)

}

