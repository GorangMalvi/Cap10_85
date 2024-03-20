function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}

Book.prototype.getBookInfo = function() {
    return `${this.title} by ${this.author.name}, Genre: ${this.genre}, Price: $${this.price}`;
};

var author1 = new Author("J.K. Rowling", 1965, "British");
var author2 = new Author("Stephen King", 1947, "American");

var book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 15.99);
var book2 = new Book("The Shining", author2, "Horror", 12.99);
var book3 = new Book("It", author2, "Horror", 14.99);


console.log(book1.getBookInfo());
console.log(book2.getBookInfo());
console.log(book3.getBookInfo());
