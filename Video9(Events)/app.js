let h2 = document.querySelector('#book-list h2');

h2.addEventListener('click', function(e){
	console.log(e.target);
	console.log(e);
	let children = document.querySelector('#book-list ul').children;
	console.log(children);
});

// target all of 'delete' buttons in 'book-list'
let buttons = document.querySelectorAll('#book-list .delete');
// create an array, cycle through array
Array.from(buttons).forEach(function(button){
	// add event listener to each 'delete' button
	button.addEventListener('click',function(e){
		// target parentElement of each 'delete' button (each 'li' element)
		const li = e.target.parentElement;
		// target parent of each li (ul) and then remove the parent of the clicked 'delete' button (li);
		li.parentNode.removeChild(li);
	})
});

// Find like tag within page-banner element
const link = document.querySelector('#page-banner a');
// Add event listener to the link 
link.addEventListener('click', function(e){
	// prevent the default action of the link tag
	e.preventDefault();
	// change inner text of a tag to state that navigation has been prevented
	e.target.textContent = "Navigation to the net ninja has been prevented";
});