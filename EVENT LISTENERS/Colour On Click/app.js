const square1 = document.querySelector('.square-1');
const square2 = document.querySelector('.square-2');
const square3 = document.querySelector('.square-3');
const square4 = document.querySelector('.square-4');

square1.addEventListener('click', function() {
    square1.classList.toggle("red");
})
square2.addEventListener('click', function() {
    square2.classList.toggle("green");
})
square3.addEventListener('click', function() {
    square3.classList.toggle("blue");
})
square4.addEventListener('click', function() {
    square4.classList.toggle("yellow");
})

// add windows background and audio when all four squares active
// clean up code so it does not need to repeat for each square
    // could use an array of colours
    
