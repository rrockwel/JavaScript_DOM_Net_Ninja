const list = document.querySelector('#book-list ul');

// Delete Books
list.addEventListener('click', function(e){
	if(e.target.className === 'delete'){
		const li = e.target.parentElement;
		list.removeChild(li);
	}
});





