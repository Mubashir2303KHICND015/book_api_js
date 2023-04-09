const ReadingList = require('../book_api_js-1/book_api_js');

test('AC1', () => {
    //Arrange
    let assert = 0
    //Act
    const result = ReadingList.numberRead();
    //Assert
    expect(result).toBe(assert);
});

test('AC2', () => {
    //Arrange
    let assert = 1
    //Act
    ReadingList.addBook("ABC", "UBS", 250, 2003, "25 Jan, 2020", 5)
    const result = ReadingList.numberRead();
    //Assert
    expect(result).toBe(assert);
});

test('AC3', () => {
    //Arrange
    ReadingList.clearList()
    let assert = 2
    //Act
    ReadingList.addBook("How", "Robert Frank", 200, 2005, "4 Apr 2023", 4)
    ReadingList.addBook("ABC", "UBS", 250, 2003, "25 Jan, 2020", 5)
    const result = ReadingList.numberRead();
    //Assert
    expect(result).toBe(assert);
});

test('AC4', () => {
    //Arrange
    ReadingList.clearList()
    let assert = ["ABC by UBS, 250 pages, 2003 read on 25 Jan, 2020, 5"]
    //Act
    ReadingList.addBook("How", "Robert Frank", 200, 2005, "4 Apr 2023", 4)
    ReadingList.addBook("ABC", "UBS", 250, 2003, "25 Jan, 2020", 5)
    ReadingList.deleteBook("How")
    const result = ReadingList.getBooks(ReadingList.books);
    //Assert
    expect(result).toEqual(assert);
});

test('AC5', () => {
    //Arrange
    ReadingList.clearList()
    let assert = ["ABC by UBS, 250 pages, 2003 read on 25 Jan, 2020, 5"]
    ReadingList.addBook("ABC", "UBS", 250, 2003, "25 Jan, 2020", 5)
    //Act
    const result = ReadingList.getBooks(ReadingList.books);
    //Assert
    expect(result).toEqual(assert);
});

test('AC6', () => {
    //Arrange
    ReadingList.clearList()
    let assert = [
        "How by Robert Frank, 200 pages, 2005 read on 4 Apr, 2023, 4",
        "Redlight by Rojer Mercy, 354 pages, 2020 read on 6 Aug, 2020, 4"
      ]
    ReadingList.addBook("ABC", "UBS", 250, 2003, "25 Jan, 2020", 5)
    ReadingList.addBook("How", "Robert Frank", 200, 2005, "4 Apr, 2023", 4)
    ReadingList.addBook("Redlight", "Rojer Mercy", 354, 2020, "6 Aug, 2020", 4)
    //Act
    const result = ReadingList.getBooksByRating(4);
    //Assert
    expect(result).toEqual(assert);
});

