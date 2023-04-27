// Seleciona o botão "Adicionar livro"
const addButton = document.querySelector(".add-book-button");

// Seleciona o elemento popup
const popup = document.querySelector(".popup");

// Seleciona o botão para fechar o popup
const closePopupButton = document.querySelector(".close-button");

// Seleciona o formulário
const form = document.querySelector("form");

// Seleciona o elemento content
const content = document.querySelector(".content");

// Cria um array vazio para armazenar os livros
let books = [];

// Adiciona um evento de clique ao botão "Adicionar livro" que exibe o popup
addButton.addEventListener("click", () => {
  popup.style.display = "block";
});

// Adiciona um evento de clique ao botão para fechar o popup
closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
});

// Adiciona um evento ao formulário para tratar o envio de dados
form.addEventListener("submit", (event) => {
  // Previne o comportamento padrão do formulário
  event.preventDefault();

  // Obtém os valores do formulário
  const titulo = form.titulo.value;
  const autor = form.autor.value;
  const paginas = form.paginas.value;
  const leu = form.leu.checked;

  // Cria um objeto livro com os valores obtidos do formulário
  const book = {
    titulo,
    autor,
    paginas,
    leu,
  };

  // Adiciona o livro ao array de livros
  books.push(book);

  // Renderiza a lista de livros
  renderBooks();

  // Reseta o formulário
  form.reset();

  // Esconde o popup
  popup.style.display = "none";
});

// Função para renderizar a lista de livros na tela
function renderBooks() {
  // Limpa o conteúdo anterior da área de exibição de livros
  content.innerHTML = "";

  // Itera sobre o array de livros e cria um elemento HTML para cada livro
  books.forEach((book) => {
    // Cria um elemento div para exibir as informações do livro
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    // Cria um elemento div para exibir o título do livro
    const title = document.createElement("div");
    title.classList.add("book-title");
    title.textContent = book.titulo;

    // Cria um elemento div para exibir o autor do livro
    const author = document.createElement("div");
    author.classList.add("book-author");
    author.textContent = `Autor: ${book.autor}`;

    // Cria um elemento div para exibir a quantidade de páginas do livro
    const pages = document.createElement("div");
    pages.classList.add("book-pages");
    pages.textContent = `Páginas: ${book.paginas}`;

    // Cria um elemento div para exibir se o livro foi lido ou não
    const read = document.createElement("div");
    read.classList.add("book-read");
    read.textContent = book.leu ? "Leu" : "Não leu";

    // Adiciona os elementos de informações do livro ao elemento div
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);

    // Adiciona o elemento div do livro à área de exibição de livros
    content.appendChild(bookCard);
  });
}

