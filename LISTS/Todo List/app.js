// empty array to start
let todoItems = []

// create a new todo object from input
// push to todoItems
addTodo(text) => {
    const todo = {
        text,
        checked: false,
        id: Date.now()
    }

    todoItems.push(todo)
}

// Select form element
const form = document.querySelector('.js-form')
// Add a submit event listener
form.addEventListener('submit', (e) => {
    // prevent default aka page refresh on click
    e.preventDefault()
    // select text input
    const input = document.querySelector('.js-todo-input')
})