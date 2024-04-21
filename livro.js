class Livro {
  #titulo;
  #autor;

  constructor(titulo, autor) {
    this.#titulo = titulo;
    this.#autor = autor;
  }
}

module.exports = {
  Livro
};
