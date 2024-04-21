// Importação da classe Biblioteca
const { Biblioteca } = require("./biblioteca");

// Criação de uma instância da biblioteca
const minhaBiblioteca = new Biblioteca();

// Adicionando livros à biblioteca
minhaBiblioteca.adicionarLivro("Dom Casmurro", "Machado de Assis");
minhaBiblioteca.adicionarLivro("Dom Casmurro", "Machado de Assis");
minhaBiblioteca.adicionarLivro(
  "O Pequeno Príncipe",
  "Antoine de Saint-Exupéry"
);
minhaBiblioteca.adicionarLivro("1984", "George Orwell");

// Listando todos os livros
minhaBiblioteca.listarLivros();

// Buscando e mostrando livros pelo título
const resultado = minhaBiblioteca.encontrarLivroPeloTitulo("Príncipe");
console.log("Livros encontrados:");
for (let index = 0; index < resultado.length; index++) {
  console.log(`${resultado[index].titulo} por ${resultado[index].autor}`);
}
