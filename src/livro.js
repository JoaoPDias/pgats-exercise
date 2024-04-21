class Livro {
  #titulo;
  #autor;

  constructor(titulo, autor) {
    this.#titulo = titulo;
    this.#autor = autor;
  }

  get titulo() {
    return this.#titulo;
  }

  get autor() {
    return this.#autor;
  }
}

module.exports = {
  Livro,
};
