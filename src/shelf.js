function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(removeBook, stockedShelf) {
  for (var i = 0; i < stockedShelf.length; i++) {
    if (removeBook === stockedShelf[i].title) {
      stockedShelf.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  var booksOnShelf = [];
  for (var i = 0; i < shelf.length; i++) {
    booksOnShelf.push(shelf[i].title);
  }
  return booksOnShelf.join(', ');
}

function searchShelf(shelf, book) {
  var includedBooks = [];
  for (var i = 0; i < shelf.length; i++) {
    includedBooks.push(shelf[i].title)
  }
  return includedBooks.includes(book);
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};