const { Livro } = require("./livro");

class Biblioteca {
  constructor() {
    this.livros = [];
  }

  adicionarLivro(titulo, autor) {
    const busca = this.encontrarLivroPeloTitulo(titulo);
    let resultado = false;
    for (let index = 0; index < busca.length; index++) {
      if (busca[index].autor === autor) {
        resultado = true;
      }
    }
    if (resultado) {
      console.log(
        `Erro: O livro '${titulo}' por ${autor} já está na biblioteca!`
      );
    } else if (!titulo || !autor) {
      console.log("Valores Inválidos");
    } else {
      this.livros.push(new Livro(titulo, autor));
      console.log(`Livro adicionado: ${titulo} por ${autor}`);
    }
  }

  encontrarLivroPeloTitulo(titulo) {
    const resultados = [];
    for (let index = 0; index < this.livros.length; index++) {
      if (this.livros[index].titulo.includes(titulo)) {
        resultados.push(this.livros[index]);
      }
    }
    return resultados;
  }

  listarLivros() {
    console.log("Lista de todos os livros:");
    for (let index = 0; index < this.livros.length; index++) {
      console.log(
        `${this.livros[index].titulo} por ${this.livros[index].autor}`
      );
    }
  }
}

module.exports = {
  Biblioteca,
};
