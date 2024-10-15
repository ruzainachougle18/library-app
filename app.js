const myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Method to toggle the read status of a book
Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

// Function to add a new book to the library
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// Display the books on the page
function displayBooks() {
  const libraryContainer = document.getElementById('library-container');
  libraryContainer.innerHTML = '';  // Clear any previous content

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <h2>${book.title}</h2>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
      <button class="remove-btn" data-index="${index}">Remove</button>
      <button class="toggle-read-btn" data-index="${index}">Toggle Read</button>
    `;

    libraryContainer.appendChild(bookCard);
  });

  // Remove button event listener
  document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const bookIndex = e.target.getAttribute('data-index');
      myLibrary.splice(bookIndex, 1);  // Remove the book from the array
      displayBooks();  // Refresh the display
    });
  });

  // Toggle read status button event listener
  document.querySelectorAll('.toggle-read-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const bookIndex = e.target.getAttribute('data-index');
      myLibrary[bookIndex].toggleRead();  // Toggle the read status
      displayBooks();  // Refresh the display
    });
  });
}

// Handle form submission for adding new books
document.getElementById('book-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the form from refreshing the page
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  addBookToLibrary(title, author, pages, read);
  displayBooks();  // Refresh the display
  document.getElementById('book-form').reset();  // Clear the form
});

// Show the form when "New Book" button is clicked
document.getElementById('new-book-btn').addEventListener('click', () => {
  document.getElementById('book-form').style.display = 'block';
});
