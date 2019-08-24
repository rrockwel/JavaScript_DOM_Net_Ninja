/// Traversing nodes in the DOM
const bookList = document.querySelector('#book-list');

console.log("the parent node is: ", bookList.parentNode);
console.log('the parent element is: ', bookList.parentElement);
console.log('the grand-parent element is: ', bookList.parentElement.parentElement);

console.log(bookList.children);