let books = document.querySelectorAll('#book-list li .name');
Array.from(books).forEach(function(book){
	book.textContent += ' (book title)';
});

const bookList = document.querySelector('#book-list');
//bookList.innerHTML = '<h2> Books to NOT read </h2>'
bookList.innerHTML += '<p>This is how you add HMTL</p>'

//bookList.innerHTML = '<div id = "second-book-list"><h2>Books to not read</h2><p>Adding HTML</p></div>';