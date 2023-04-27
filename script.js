const openFormBtn = document.getElementById('open-form-btn');
const formContainer = document.getElementById('form-container');
const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

openFormBtn.addEventListener('click', () => {
  formContainer.style.display = 'block';
});

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const bookName = document.getElementById('book-name').value;
  const bookAuthor = document.getElementById('book-author').value;
  const bookPages = document.getElementById('book-pages').value;

  const book = {
    name: bookName,
    author: bookAuthor,
    pages: bookPages
  };

  let books = JSON.parse(localStorage.getItem('books')) || [];
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));

  const bookEntry = document.createElement('div');
  bookEntry.classList.add('book-entry');
  bookEntry.innerHTML = `
    <h2>${bookName}</h2>
    <p>Autor: ${bookAuthor}</p>
    <p>Número de Páginas: ${bookPages}</p>
  `;
  bookList.appendChild(bookEntry);

  bookForm.reset();
  formContainer.style.display = 'none';
});

window.addEventListener('load', () => {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  books.forEach((book) => {
    const bookEntry = document.createElement('div');
    bookEntry.classList.add('book-entry');
    bookEntry.innerHTML = `
      <h2>${book.name}</h2>
      <p>Autor: ${book.author}</p>
      <p>Número de Páginas: ${book.pages}</p>
    `;
    bookList.appendChild(bookEntry);
  });
});
