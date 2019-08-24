// 
const wrap =document.querySelector('#wrapper');
console.log(wrap);

// Select specific element with querySelector
const secondBook = document.querySelector('#book-list li:nth-child(2) .name');
console.log(secondBook);

// Select multiple elements with querySelector
let books = document.querySelectorAll('#book-list .name');
console.log(books);

let booksArray = Array.from(books)
console.log('Turn books into an array and for loop through:');
for(i = 0 ; i < booksArray.length; i++){
	console.log(booksArray[i]);
};

console.log('Or, turn books into array and use forEach:');
Array.from(books).forEach(function(item){console.log(item)});


