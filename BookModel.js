class BookModel {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  // Database of books
  const books = [
    new BookModel("The Great Gatsby", "F. Scott Fitzgerald"),
    new BookModel("To Kill a Mockingbird", "Harper Lee"),
    new BookModel("1984", "George Orwell"),
  ];
  
  // Controller
  class BookController {
    getAllBooks() {
      return books;
    }
  }
  
  // View
  class BookView {
    constructor(controller) {
      this.controller = controller;
    }
  
    render() {
      const bookList = document.createElement("ul");
      this.controller.getAllBooks().forEach((book) => {
        const bookItem = document.createElement("li");
        bookItem.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(bookItem);
      });
      document.body.appendChild(bookList);
    }
  }
  
  // Usage
  const bookController = new BookController();
  const bookView = new BookView(bookController);
  bookView.render();
  