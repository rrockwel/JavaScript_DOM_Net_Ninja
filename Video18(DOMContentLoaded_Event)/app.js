
document.addEventListener('DOMContentLoaded', function(){

const list = document.querySelector('#book-list ul');

// Delete Books
list.addEventListener('click', function(e){
	if(e.target.className === 'delete'){
		const li = e.target.parentElement;
		list.removeChild(li);
	}
});

// Add A New Book
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
	e.preventDefault();
	// Collect value that is entered into input textbox
	const value = addForm.querySelector('input[type="text"]').value;

	// Create HTML Elements
	const li = document.createElement('li');
	const bookName = document.createElement('span');
	const deleteBtn = document.createElement('span');

	// Add contents to span elements
	deleteBtn.textContent = 'delete';
	bookName.textContent = value;

	// Add Classes to elements
	bookName.classList.add('name');
	deleteBtn.classList.add('delete');

	// Append HTML Elements
	li.appendChild(bookName);
	li.appendChild(deleteBtn);

	// Aooend to DOM
	list.appendChild(li);
});

// Hide Books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
	if(hideBox.checked === true){
		list.style.display = 'none';
	}else{
		list.style.display = 'initial';
	}
});


// Search Books
const searchBar = document.forms['search-books'].querySelector('input');
	// Add event listener to search input box
searchBar.addEventListener('keyup', function(e){
	// Save value in input textbox as a variable
	const term = e.target.value.toLowerCase();
	// Create collection of books 
	const books = list.getElementsByTagName('li');
	// Cycle through collection of books
	Array.from(books).forEach(function(book){
		const title = book.firstElementChild.textContent;
		if(title.toLowerCase().indexOf(term) != -1){
			book.style.display = 'block';
		}else{
			book.style.display = 'none';
		}
	});

});

// Tabbed Content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
	if(e.target.tagName == 'LI'){
		const targetPanel = document.querySelector(e.target.dataset.target);
		Array.from(panels).forEach(function(panel){
			if(panel == targetPanel){
				panel.classList.add('active');
			}else{
				panel.classList.remove('active');
			}
		});
	}
});

});