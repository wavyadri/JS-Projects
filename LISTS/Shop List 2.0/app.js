// type in input, submit or click event to output HTML
// output has CHECK and X
// CHECK click event strikes out item
// X click event deletes item
// item counter: item add = +1. item deleted OR completed = -1.
// when only one item left unchecked, trigger a reminder

let items = [];
// if X, remove item
let itemsCount = [];
// if X OR CHECK, remove item

const form = document.querySelector('.js-form');
const shoppingList = document.querySelector('.shopping-list')

// event triggers
const add = document.querySelector('.js-button-add');
const done = document.querySelector('.js-done');
const remove = document.querySelector('.js-remove');
const input = document.querySelector('.js-input');


handleSubmit = (e) => {
    e.preventDefault();

    const inputText = input.value.trim();

    if (inputText !== '') {
        items.push(inputText);

        items.push(inputText);
        createItem(items[items.length-1]);
        updateItemsCount(); //////////////////////////////////

        input.classList.remove('fill-in');
        clearInput(input);
        input.focus();
    } else if (inputText === '') {
        input.classList.add('fill-in');
        input.focus();
    }
}

createItem = (newItem) => {
    const list = document.createElement('div');
    list.classList.add('list');
    list.innerHTML = `
        <div class='list-items'>
            <i class="fas fa-check fa-2x js-done"></i>
            <p class='js-list-text'>${newItem}</p>
        </div>
        <i class="fas fa-times fa-2x js-remove"></i>
    `;
    
    shoppingList.appendChild(list);
}

checkItem = (e) => {
    if (e.target.classList.contains('js-done')) {
        console.log('correct target')
        // text strike through
        const text = document.querySelector('.js-list-text');
        text.classList.toggle('strike');

        // checkmark colour
        const doneIcon = document.querySelector('.js-done');
        doneIcon.classList.toggle('done');
    }
}

removeItem = (e) => {
    if (e.target.classList.contains('js-remove')) {
        const removeIcon = document.querySelector('.list');
        removeIcon.classList.add('hidden');
        // remove from array
        // then call createItem again to re render without it part of the arr
    }
}

updateItemsCount = () => {
}

clearInput = (target) => {
    target.value = '';
}

form.addEventListener('submit', handleSubmit);
add.addEventListener('click', handleSubmit);
shoppingList.addEventListener('click', checkItem);
shoppingList.addEventListener('click', removeItem);

