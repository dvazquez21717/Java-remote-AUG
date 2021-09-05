// let el = document.getElementById('username');
// let inputs = document.getElementsByTagName('input');
// let inError = document.getElementsByClassName('error');

// console.log(input.length);
// console.log(inError.length);

// Get all inputs
// let firstButton = document.querySelector('button');
// let inError = document.querySelectorAll('input.error');

// console.log(firstButton); //single button node
// console.log(inError); //Node list of inputs with class 'error'

// let div = document.querySelector('div');

// let a = document.querySelector('a');

// console.log(div.innerHTML);
// console.log(a.innerHTML);

// a.innerHTML = "Updated link text"

// let header = document.querySelector('header');
// console.log(header);

// let sec = document.querySelectorAll('section');
// console.log(sec);

// let curr = document.querySelector('section.current');
// console.log(curr);

// let next = curr.nextElementSibling;
// console.log(next);

// let h2node = curr.previousElementSibling.children[0];
// console.log(h2node);

// let div_h2 = document.querySelector('h2.highlight').parentElement.parentElement;
// console.log(div_h2);

// let all = Array.from(document.querySelectorAll('section h2')).map(child => child.parentElement);
// console.log(all);

let el = document.getElementById('myEl')
el.addEventListener('click', function (event) {
  alert('clicked!')
})

//Combine with DOM editing
el.addEventListener('mouseover', function (event) {
	el.innerHTML= 'hovered over';
});