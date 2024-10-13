const myLibrary = [
    {
        title:"Atomic Habits",
        author:"James Clear",
        pages:272,
        read:true
    },
    {
        title:"The Alchemist",
        author:"Paulo Coelho",
        pages:160,
        read:false
    }
];


//Book constructor is responsible for creating new book objects.
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}
