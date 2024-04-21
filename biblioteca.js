const { Livro } = require("./livro");
// Definição da classe Library
class Biblioteca {
  constructor() {
    this.livros = []; // Lista para armazenar livros
  }

  // Função para adicionar um livro
  adicionarLivro(titulo, autor) {
    if (
      this.livros.some(
        (livro) => livro.titulo === titulo && livro.autor === autor
      )
    ) {
      console.log(
        `Erro: O livro '${titulo}' por ${autor} já está na biblioteca!`
      );
    } else {
      this.livros.push(new Livro(titulo, autor));
      console.log(`Livro adicionado: ${titulo} por ${autor}`);
    }
  }

  // Função para buscar livros pelo título
  encontrarLivroPeloTitulo(titulo) {
    for (let index = 0; index < this.livros.length; index++) {
      if (this.livros[index].titulo === titulo) {
        return this.livros[index];
      }
    }
  }

  // Função para listar todos os livros
  listarLivros() {
    console.log("Lista de todos os livros:");
    for (let index = 0; index < this.livros.length; index++) {
      console.log(
        `${this.livros[index].titulo} por ${this.livros[index].autor}`
      );
    }
  }
}

// Exportação da classe Library
module.exports = {
  Biblioteca,
};
