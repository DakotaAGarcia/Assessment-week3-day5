console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


let timer;
let linger = false;

const onPic = (event) => {
  event.preventDefault();
  alert('You seem to be interested in the picture, you have good taste.');
};

let pic = document.querySelector('img');

pic.addEventListener("mouseover", (event) => {
  linger = true;
  timer = setTimeout(() => {
    if (linger) {
      onPic(event);
    }
  }, 1000);
});

pic.addEventListener("mouseout", () => {
  linger = false;
  clearTimeout(timer);
});