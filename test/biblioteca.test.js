const { Biblioteca } = require("../src/biblioteca");
const assert = require("node:assert");
describe("Biblioteca", () => {
  describe("#AdicionarLivro", () => {
    it("deve adicionar um novo livro a biblioteca", () => {
      const biblioteca = new Biblioteca();
      biblioteca.adicionarLivro("Book Title", "Author Name");
      assert.equal(biblioteca.livros.length, 1);
    });

    it("não deve adicionar um novo livro a biblioteca quando valores invalidos", () => {
      const biblioteca = new Biblioteca();
      biblioteca.adicionarLivro("", "");
      biblioteca.adicionarLivro("test", "");
      biblioteca.adicionarLivro("", "test");
      assert.equal(biblioteca.livros.length, 0);
    });

    it("não deve adicionar um novo livro a biblioteca quando ele ja existe", () => {
      const biblioteca = new Biblioteca();
      biblioteca.adicionarLivro("Book Title", "Author Name");
      biblioteca.adicionarLivro("Book Title", "Author Name");
      assert.equal(biblioteca.livros.length, 1);
    });
  });
});
