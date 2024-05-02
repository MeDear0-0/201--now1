 /*2.
  Instruction:
  - Create an object Book reference ‘practice 1’. Use a constructor Constructor(title,
  author, yearPublished. Additionally, use a 'getInfo()' method.
  Initiate code:
  // Insert your code here*/

// Create an object Book using the class Book from practice 1
// Use a constructor Constructor(title, author, yearPublished)
// Additionally, use a 'getInfo()' method

// Import the class Book from practice 1
const Book = require('./Practice1.js');

// Create an object Book with some example values
let book = new Book('The Hitchhiker\'s Guide to the Galaxy', 'Douglas Adams', 1979);

// Use the 'getInfo()' method to output information about the book
console.log(book.getInfo()); // The Hitchhiker's Guide to the Galaxy by Douglas Adams, published in 1979
