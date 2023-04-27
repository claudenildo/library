const addButton = document.querySelector(".add-book-button");
const popup = document.querySelector(".popup");
const closePopupButton = document.querySelector(".close-button");
const form = document.querySelector("form");
const content = document.querySelector(".content");

let books = [];

addButton.addEventListener("click", () => {
  popup.style.display = "block";
});

closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titulo = form.titulo.value;
  const autor = form.autor.value;
  const paginas = form.paginas.value;
  const leu = form.leu.checked;

  const book = {
    titulo,
    autor,
    paginas,
    leu,
  };

  books.push(book);

  renderBooks();

  form.reset();

  popup.style.display = "none";
});

function renderBooks() {
  content.innerHTML = "";

  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const title = document.createElement("div");
    title.classList.add("book-title");
    title.textContent = book.titulo;

    const author = document.createElement("div");
    author.classList.add("book-author");
    author.textContent = `Autor: ${book.autor}`;

    const pages = document.createElement("div");
    pages.classList.add("book-pages");
    pages.textContent = `Páginas: ${book.paginas}`;

    const read = document.createElement("div");
    read.classList.add("book-read");
    read.textContent = book.leu ? "Leu" : "Não leu";

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);

    content.appendChild(bookCard);
  });
}
