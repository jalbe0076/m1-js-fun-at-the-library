function createTitle(bookTitle) {
  return `The ${bookTitle}`;
}


function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {};
  mainCharacter.name = name;
  mainCharacter.age = age;
  mainCharacter.pronouns = pronouns;
  return mainCharacter;
}



function saveReview(customerReview, reviewBank) {
  if (!reviewBank.includes(customerReview)) {
    reviewBank.push(customerReview);
  }
}



function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}




function writeBook(title, mainCharacter, genre) {
  var newBook = {};
  newBook.title = title;
  newBook.mainCharacter = mainCharacter;
  newBook.pageCount = calculatePageCount(title);
  newBook.genre = genre;
  return newBook;
}


function editBook(bookEdit) {
  bookEdit.pageCount *= 0.75;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}