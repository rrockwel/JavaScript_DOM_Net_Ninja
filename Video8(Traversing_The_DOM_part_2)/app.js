/// Traversing sibling nodes/elements in the DOM
const bookList = document.querySelector('#book-list');

// nextSibling will return the next node sibling
console.log('#book-list next sibling is: ', bookList.nextSibling);
// nextElementSibling will return the next element sibling
console.log('#book-list next element sibling is: ', bookList.nextElementSibling);

// previoustSibling will return the previous node sibling
console.log('#book-list previous sibling is: ', bookList.previousSibling);
// previousElementSibling will return the previous element sibling
console.log('#book-list previous element sibling is: ', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<BR/>Too Cool for everyone else!';