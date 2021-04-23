// empty array to start
let todoItems = [];

// create a new todo object from input
// push to todoItems
function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    }

    todoItems.push(todo);
    console.log(todoItems);
}

// Select form element
const form = document.querySelector('.js-form');
// Add a submit event listener
form.addEventListener('submit', e => {
    // prevent default aka page refresh on click
    e.preventDefault();
    // select text input
    const input = document.querySelector('.js-todo-input');

    // remove whitespace with trim()
    const text = input.value.trim();
    // get input value
    if (text !== '') {
        // grab text
        addTodo(text);
        // reset input to empty
        input.value = '';
        // reset focus
        input.focus();
    }
})