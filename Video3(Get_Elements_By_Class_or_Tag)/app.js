// Get Elements By Class
console.log(document.getElementsByClassName('title'));

// HTML Collection items can be accessed like an array
console.log(document.getElementsByClassName('title')[0]);

// Get Elements by Tag Name

console.log(document.getElementsByTagName('li'));
for(i = 0; i < document.getElementsByTagName('li').length; i++){
	console.log(document.getElementsByTagName('li')[i]);
}

// Cannot use forEach on the HTML collection that is returned
let titles = document.getElementsByClassName('title');
/*
titles.forEach(function(item){
	console.log(item);
})
*/

// Checks whether 'titles' is an array
console.log(Array.isArray(titles));
// Can use 'Array.from()' to turn and HTML Collection into an Array
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(item){
	console.log(item);
});

titleArray = Array.from(titles);
console.log(titleArray);
