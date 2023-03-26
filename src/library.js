function createLibrary(libraryName) {
  var libraries = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
  return libraries;
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
}

function checkoutBook(library, book, genre) {
    for (var i = 0; i < library.shelves[genre].length; i++) { 
      if (library.shelves[genre][i].title === book) {
        library.shelves[genre].splice(i, 1);
        return `You have now checked out ${book} from the ${library.name}.`
      }
    }
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}.`;
}

function takeStock(library, genre) {
  var shelfNames = Object.keys(library.shelves);
  var booksOnShelves =[];

  for (var i = 0; i < shelfNames.length; i++) {
    for (var j = 0; j < library.shelves[shelfNames[i]].length; j++) {
      booksOnShelves.push(library.shelves[shelfNames[i]][j].title);
    }
  }

  if (!genre) {
      return `There are a total of ${booksOnShelves.length} books at the ${library.name}.`;
  }
  return `There are a total of ${library.shelves[genre].length} ${genre} books at the ${library.name}.`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};