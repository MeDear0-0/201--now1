class Book{
    constructor(title = 'no title',author = 'no author',yearPublished = 0){
        this.title = title,
        this.author = author,
        this.yearPublished = yearPublished
    }

    getInfo(){
        return `Title: ${this.title}, Author: ${this.author}, Year Published: ${this.yearPublished}`
    }
}

const JsBook = new Book("Javascript", "lucy", 2024)
console.log(JsBook.getInfo())