// empty array to start
let todoItems = [];

// we want to take the items added to the array and display them
// append li for each item to the already existing ul in the DOM
function renderTodo(todo) {
    // persist app state
    localStorage.setItem('todoItemsRef', JSON.stringify(todoItems));

    // select first element with a class of 'js-todo-list'
    const list = document.querySelector('.js-todo-list');

    // select current todo item in the DOM
    const item = document.querySelector(`[data-key='${todo.id}']`);
    
   if (todo.deleted) {
       // remove item from DOM
       item.remove();
       return
   }
   
    // if todo.checked is true, let isChecked = done
    const isChecked = todo.checked ? 'done' : '';

    // create an li and assign to node
    const node = document.createElement('li');

    // set class attribute
    // if the item is checked, it will receive the 'done' css styles
    node.setAttribute('class', `todo-item ${isChecked}`);
    // set data-key attribute to the id
    node.setAttribute('data-key', todo.id);
    // set inner contents of li
    node.innerHTML = `
        <input id="${todo.id}" type="checkbox" />
        <label for="${todo.id}" class="tick js-tick"></label>
        <span>${todo.text}</span>
        <button class="delete-todo js-delete-todo">
        <i class="fas fa-3x fa-minus-circle" id="delete-icon"></i>
        </button>
    `;

    // if the item already exists in the DOM
    if (item) {
        // replace it
        list.replaceChild(node, item);
    } else {
        // otherwise append it to the end of the list
        list.append(node);
    }
}


// create a new todo object from input
// push to todoItems
function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    }

    todoItems.push(todo);
    renderTodo(todo);
}

function toggleDone(key) {
    // findIndex is an array method that returns position of an element in the array that satisies the provided testing function
    const index = todoItems.findIndex(item => item.id === Number(key));
    // locate the item in todoItems array and set its checked property to the opposite
    todoItems[index].checked = !todoItems[index].checked;
    
    renderTodo(todoItems[index]);
}

function deleteTodo(key) {
    // find corresponding todo obj in todoItems array
    const index = todoItems.findIndex(item => item.id === Number(key));
    // create a new obj with properties of the current todo item
    // and a 'deleted' property set to true
    const todo = {
        deleted: true,
        ...todoItems[index]
    };

    // remove todo item from array by filtering
    todoItems = todoItems.filter(item => item.id !== Number(key));
    renderTodo(todo);
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
});

// Mark Task Completed
// select entire list
const list = document.querySelector('.js-todo-list');
// add click event listener to list and it's children (aka on the entire container of ul and li)
list.addEventListener('click', event => {
    if (event.target.classList.contains('js-tick')) {
        //For example: element.dataset.example = null is converted into data-example="null".
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }


    // Delete Task
    if (event.target.classList.contains('js-delete-todo')) {
        const itemKey = event.target.parentElement.dataset.key;
        deleteTodo(itemKey);
    }
});

// render existing items when page reloaded
document.addEventListener('DOMContentLoaded', () => {
    const ref = localStorage.getItem('todoItemsRef');
    if (ref) {
      todoItems = JSON.parse(ref);
      todoItems.forEach(t => {
        renderTodo(t);
      });
    }
  });
  
