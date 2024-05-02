/*3.
Instruction:
- Creating a library system using class Book and Library.
Class Book:
Constructor
• Constructor(title, author, pages, genre): This initializes the properties 'title',
'author' , ' pages' and 'genre'.
Properties
• title: type string
• author: type string
• pages: type number
• genre: type string
Methods
• getSummary() - Returns a string summary of the book ex: .
"Title: Harry Wick, Author: Conan, Pages: 345, Genre: Sci-Fi"
Class Library:
Constructor
• Constructor(name): This initializes the properties 'name' and creates an
empty array in the property books
Properties
• name: type string
• books: type array of Book objects, initially empty.
Methods
• addBook(newBook) - Accepts a Book object and adds it to the books array.
• getBooksByGenre(genre) - Returns an array of books that match the
specified genre.
• getTotalPagesByGenre(genre) - Returns the total number of pages for all
books of a specified genre.*/

// Creating class Book
class Book {
    // Constructor(title, author, pages, genre): This initializes the properties 'title', 'author' , ' pages' and 'genre'.
    constructor(title, author, pages, genre) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.genre = genre;
    }
  
    // getSummary() - Returns a string summary of the book ex: .
    // "Title: Harry Wick, Author: Conan, Pages: 345, Genre: Sci-Fi"
    getSummary() {
      return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Genre: ${this.genre}`;
    }
  }
  
  // Creating class Library
  class Library {
    // Constructor(name): This initializes the properties 'name' and creates an empty array in the property books
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    // addBook(newBook) - Accepts a Book object and adds it to the books array.
    addBook(newBook) {
      this.books.push(newBook);
    }
  
    // getBooksByGenre(genre) - Returns an array of books that match the specified genre.
    getBooksByGenre(genre) {
      // Declare an empty array to store the matching books
      let booksByGenre = [];
  
      // Loop through the books array and check if each book's genre matches the given genre
      for (let book of this.books) {
        if (book.genre === genre) {
          // If the book's genre matches, push it to the booksByGenre array
          booksByGenre.push(book);
        }
      }
  
      // Return the booksByGenre array
      return booksByGenre;
    }
  
    // getTotalPagesByGenre(genre) - Returns the total number of pages for all books of a specified genre.
    getTotalPagesByGenre(genre) {
      // Declare a variable to store the total number of pages
      let totalPages = 0;
  
      // Loop through the books array and check if each book's genre matches the given genre
      for (let book of this.books) {
        if (book.genre === genre) {
          // If the book's genre matches, add its pages to the totalPages
          totalPages += book.pages;
        }
      }
  
      // Return the totalPages
      return totalPages;
    }
  }
