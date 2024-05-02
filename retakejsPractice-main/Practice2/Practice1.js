/*1.
Instruction:
- Write class Book. Then, add a method to the object that outputs information about the
book.
Class Book
Constructor
• Constructor(title, author, yearPublished): This initializes the properties
'title', 'author', and 'yearPublished'. If they are empty, it assigns 'no title', 'no
author', and 0 respectively.
Properties
• title: type String
• author: type String
• yearPublished: type number
Methods
• getInfo(): This method return a string that combines the book's title, author,
and year of publication.
Initiate code:
// Creating class Book
// Insert your code here*/
// Creating class Book
class Book {
    // Constructor(title, author, yearPublished): This initializes the properties 'title', 'author', and 'yearPublished'. If they are empty, it assigns 'no title', 'no author', and 0 respectively.
    constructor(title, author, yearPublished) {
      // Use the ternary operator to assign the properties or the default values
      this.title = title ? title : 'no title';
      this.author = author ? author : 'no author';
      this.yearPublished = yearPublished ? yearPublished : 0;
    }
  
    // getInfo(): This method return a string that combines the book's title, author, and year of publication.
    getInfo() {
      // Use template literals to return the formatted string
      return `${this.title} by ${this.author}, published in ${this.yearPublished}`;
    }
  }