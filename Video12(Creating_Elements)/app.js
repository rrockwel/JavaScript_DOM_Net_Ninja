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
	const value = addForm.querySelector('input[type="text"]').value;

	// Create HTML Elements
	const li = document.createElement('li');
	const bookName = document.createElement('span');
	const deleteBtn = document.createElement('span');

	// add contents to span elements
	deleteBtn.textContent = 'delete';
	bookName.textContent = value;

	// Append HTML Elements
	li.appendChild(bookName);
	li.appendChild(deleteBtn);

	// Aooend to DOM
	list.appendChild(li);



});