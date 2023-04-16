function fetchBooks(renderBooks){

 return fetch('https://anapioficeandfire.com/api/books',renderBooks) 
 
  .then(function (response) {
    return response.json();
  })
  .then(function (renderBooks) {
    console.log(renderBooks);
  })
}

fetchBooks(renderBooks);
const books = JSON.parse(booksJSON);

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});






