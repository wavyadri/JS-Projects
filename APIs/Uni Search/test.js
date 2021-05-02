const searchBtn = document.getElementById('#js-button');
searchBtn.addEventListener('click', formSubmit);

const form = document.querySelector('#js-search-form');
form.addEventListener('submit', formSubmit);

async function formSubmit(e) {
    e.preventDefualt(); 

    const inputValue = document.querySelector('#js-search-input').value;
    const searchQuery = inputValue.trim();
    console.log(inputValue);
}

async function fetchUni(searchQuery) {
    const endpoint = `http://universities.hipolabs.com/search?name=${searchQuery}&country=${searchQuery}`;
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw Error(respone.statusText);
    }
    const university = await response.json;
    return university;

    createResults(university);
}

function createResults(university) {
    console.log('');
};