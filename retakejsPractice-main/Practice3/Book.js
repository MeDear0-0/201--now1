class Book {
    // isbn(String) : เป็นตัวระบุหนังสือ เช่น '978-7-888-14362-4', '978-3-16-148410-0'.
    // title (String): เป็นชื่อของหนังสือ.
    // authors(อาร์เรย์ของผู้เขียน): เป็นผู้เขียนของหนังสือ โดยอาร์เรย์จะเก็บอ็อบเจ็กต์ผู้เขียนซึ่งแต่ละอ็อบเจ็กต์จะเก็บข้อมูลผู้เขียนดังนี้
    //   - firstname(String): ชื่อจริงของผู้เขียน
    //   - lastname(String): นามสกุลของผู้เขียน
    // เช่น [{ firstname: 'John', lastname: 'Scott' }, { firstname: 'Adam', lastname: 'Kim' }]
    // ebook(Boolean) : บอกว่าหนังสือมีรุ่น e-book หรือไม่
  
    //constructor(isbn, title, ebook): สร้างอ็อบเจ็กต์หนังสือใหม่ด้วยพารามิเตอร์ที่ให้มา: isbn, title และ ebook.
    //   - หากพารามิเตอร์ title เป็น undefined หรือไม่มีค่าที่ให้ จะตั้งค่า title เป็น 'untitled' เป็นค่าพารามิเตอร์เริ่มต้น
    //   - หากพารามิเตอร์ ebook เป็น undefined หรือไม่มีค่าที่ให้ จะตั้งค่า ebook เป็น false เป็นค่าพารามิเตอร์เริ่มต้น
    //   - ตัวคอนสตรักเตอร์จะกำหนดค่าเริ่มต้นของพรอพเพอร์ตี้ authors เป็นอาร์เรย์ว่าง ([]) โดยไม่รับพารามิเตอร์
    constructor(isbn, title = 'untitled', ebook = false) {
      this.isbn = isbn
      this.title = title
      this.ebook = ebook
      this.authors = []
    }
    //   addAuthor(fn, ln): สร้างอ็อบเจ็กต์ผู้เขียนโดยกำหนดค่าของพรอพเพอร์ตี้ firstname ด้วยพารามิเตอร์ที่ให้มาและค่าของพรอพเพอร์ตี้ lastname ด้วยพารามิเตอร์ที่ให้มา แล้วเพิ่มลงในท้ายอาร์เรย์ authors จากนั้นคืนค่าความยาวใหม่ของอาร์เรย์ authors
    addAuthor(fn, ln) {
      return this.authors.push({ firstname: fn, lastname: ln })
    }
    // getFirstAuthor() : คืนค่าอ็อบเจ็กต์ผู้เขียนแรกของหนังสือ หากไม่มีผู้เขียน จะคืนค่า undefined
    getFirstAuthor() {
      return this.authors[0]
    }
    // getLastAuthor(): คืนค่าอ็อบเจ็กต์ผู้เขียนสุดท้ายของหนังสือ
    getLastAuthor() {
      return this.authors[this.authors.length - 1]
    }
    //   getCoAuthors(): คืนค่าอาร์เรย์ของผู้เขียนทั้งหมดยกเว้นผู้เขียนแรก หากไม่มีผู้ร่วมแต่ไม่มีผู้ร่วม จะคืนค่าอาร์เรย์ว่าง ([]).
    getCoAuthors() {
      // return this.authors.slice(1, this.authors.length)
      const [, ...coauthors] = this.authors
      return coauthors
    }
    //   findAuthor(firstname, lastname): คืนค่าอ็อบเจ็กต์ผู้เขียนแรกที่ตรงกับพารามิเตอร์ทั้ง firstname และ lastname (ไม่สนใจตัวอักษรพิมพ์เล็กหรือพิมพ์ใหญ่) หากไม่มีผู้เขียนตรงกับเงื่อนไข จะคืนค่า undefined
    findAuthor(firstname, lastname) {
      return this.authors.find(
        (author) =>
          author.firstname.toLowerCase() === firstname.toLowerCase() &&
          author.lastname.toLowerCase() === lastname.toLowerCase()
      )
    }
    // hasEbook() : คืนค่าของ ebook property
    hasEbook() {
      return this.ebook
    }
  }
  
  const bk1 = new Book()
  console.log(bk1.addAuthor('Somsak', 'Jaidee')) // 1
  console.log(bk1.addAuthor('Somsri', 'Jaidee')) // 2
  console.log(bk1.addAuthor('Somchai', 'Jaidee')) // 3
  console.log(bk1)
  
  const bk2 = new Book('1-234-567-8', 'Introduction to JavaScript', true)
  console.log(bk2.addAuthor('John', 'May'))
  console.log(bk2)
  
  console.log(bk1.getFirstAuthor())
  console.log(bk1.getLastAuthor())
  console.log(bk1.getCoAuthors())
  console.log(bk1.findAuthor('Somchai', 'JAIDEE'))
  console.log(bk1.hasEbook())
