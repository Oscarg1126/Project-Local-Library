function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc,book) => {
    return book.borrows.filter(borrow => !borrow.returned).length + acc
   },0)
 }

function getMostCommonGenres(books) {
  let genres = []
    books.forEach(book => {
      let genreExists = genres.find(genre => genre.name === book.genre)
      if (genreExists === undefined){
          genres.push({name: book.genre, count: 1})
      } else {
        genres.forEach(genre => {
          if (genre.name === genreExists.name) {
            genre.count++
          }
        })
      }
    })
    return genres
      .sort((a, b) => b.count - a.count)
      .splice(0, 5)
  
}

function getMostPopularBooks(books, count=5) {
  const borrows = books.map(book=>({
    name:book.title, count:book.borrows.length}));
  borrows.sort((a,b) => b.count - a.count);
  return borrows.slice(0,count);
}


function getMostPopularAuthors(books, authors, count=5) {
  return authors.map(a => {
    // loop through the author array
    a.count = books.filter(b => 
      b.authorId === a.id).reduce((b, a) => 
      b + (a.borrows && a.borrows.length || 0), 0);
      a.name = `${a.name.first} ${a.name.last}`;
    delete a.id
    return a
  }).sort((a, b) => b.count - a.count).slice(0, count)  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
