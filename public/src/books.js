function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return books.find(book => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let books1 = books.filter(book => book.borrows[0].returned === false);
  let books2 = books.filter(book => book.borrows[0].returned === true);
    return [books1, books2];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    const account = accounts.find(account => account.id === borrow.id)
    account.returned = borrow.returned
    return account
  }).slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
