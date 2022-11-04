function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach (book => {
    const bookLi = document.createElement("li")
    bookLi.textContent = book.name
    main.appendChild(bookLi)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});