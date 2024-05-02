/*4
Instruction:
- Create a 'Book' object and a 'Library' object for 'Practice 3'. Use a constructor and
methods in both classes.
Initiate code:
// Insert your code here*/

// Import the classes Book and Library from 'Practice 3'
const Book = require('./Practice3.js').Book;
const Library = require('./Practice3.js').Library;

// Create a 'Book' object with some example values
let book1 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1178, 'Fantasy');

// Use the 'getSummary()' method to output information about the book
console.log(book1.getSummary()); // Title: The Lord of the Rings, Author: J.R.R. Tolkien, Pages: 1178, Genre: Fantasy

// Create a 'Library' object with some example name
let library = new Library('My Library');

// Use the 'addBook()' method to add the book to the library
library.addBook(book1);

// Use the 'getBooksByGenre()' method to get an array of books that match a genre
console.log(library.getBooksByGenre('Fantasy')); // [ Book { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', pages: 1178, genre: 'Fantasy' } ]

// Use the 'getTotalPagesByGenre()' method to get the total number of pages for all books of a genre
console.log(library.getTotalPagesByGenre('Fantasy')); // 1178
