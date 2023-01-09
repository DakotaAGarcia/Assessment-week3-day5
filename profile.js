console.log("connected")


let favColor = (event) =>{
	event.preventDefault();
	
	alert('My favorite color is Red');
}


let color = document.querySelector('#color');

color.addEventListener('click', favColor);

let favPlace = (event) =>{
	event.preventDefault();
	
	alert('My favorite place is on a mountain top');
}


let place = document.querySelector('#place');

place.addEventListener('click', favPlace);

let favRitual = (event) =>{
	event.preventDefault();
	
	alert('My favorite ritual is going for a run or to the gym');
}


let ritual = document.querySelector('#ritual');

ritual.addEventListener('click', favRitual);