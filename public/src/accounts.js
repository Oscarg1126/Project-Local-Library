function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {
  const sortedNames = accounts.sort((lastA, lastB) => lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase() ? 1 : -1 ); 
  return sortedNames;
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
   let { id } = account;
   books.forEach((book) => { book.borrows.forEach((borrow) => { 
     if (id === borrow.id) { 
       total++; 
     }}); 
  }); 
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOut = []; 
  books.forEach(book => { 
    if (book.borrows.find(item => item.id === account.id && !item.returned))                checkedOut.push(book); 
  }) 
  checkedOut.forEach(book => { 
    let theAuthor = authors.find(person => person.id === book.authorId); book['author'] = theAuthor; }) 
  return checkedOut;  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
