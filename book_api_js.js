let books = [];

const clearList = () => books = [];

const numberRead = () => books.length;

const addBook = (title, author, length, year, dateRead, rating) => {
    let book = {
        title : title,
        author : author,
        length : length,
        year : year,
        dateRead : dateRead,
        rating : rating
    }

    books.push(book);
}

const deleteBook = (title) => {
    for(let i = 0; i<books.length; i++){
        if(books[i].title === title){
            books.splice(i, 1);
            break;
        }
    }
}

const getBooks = (books) => {
    let booksInfo = books.map(book => `${book.title} by ${book.author}, ${book.length} pages, ${book.year} read on ${book.dateRead}, ${book.rating}`);
    return booksInfo
}

const getBooksByRating = (rating) => {
    let equallyRatedBooks = books.filter(book => book.rating === rating)
    let sortedArray = getBooks(equallyRatedBooks);
    return sortedArray
}

module.exports = {
    books,
    clearList,
    numberRead,
    addBook,
    deleteBook,
    getBooks,
    getBooksByRating
}
