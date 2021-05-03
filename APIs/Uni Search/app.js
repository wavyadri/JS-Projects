// button
const searchBtn = document.getElementById('js-button');
searchBtn.addEventListener('click', formSubmit);

// form
const form = document.getElementById('js-search-form');
form.addEventListener('submit', formSubmit);

// dynamic html fields
const input = document.querySelector('.search-input');
const searchResults = document.getElementById('search-results');

// spinner
const spinner = document.getElementById('js-spinner');

async function formSubmit(e) {
    // prevent default
    e.preventDefault(); 
    // get form input, then clear
    const inputValue = input.value.trim();
    clearInput(input);
    // clear output html
    clearHTML(searchResults);
    // active spinner
    spinner.classList.remove('hidden');

    try {
        // get data from api
        const uniList = await getUni(inputValue);

        // check if input matches any data in api
        const matches = uniList.filter(uni => {
        // negative lookbehind and ahead
        const regex = new RegExp(`\\b${inputValue}(?!\S)`,'gi');
        return uni.name.match(regex) || uni.country.match(regex);
        });

        // if no
        if(matches.length === 0){
            console.log('No matches');
        }
        // if (uniList.query.searchinfo.totalhits === 0) {
        //     alert('No results found. Try different keywords.');
        //     return;
        // }
        // if yes, output html
        createUniResults(matches);

    } catch (err) {
        console.log(err);
        alert('Failed to match your search query. Please try again.');
    } finally {
        spinner.classList.add('hidden');
    }
}

// const fetchUni = async () => {
//     await getUni;
// }

async function getUni(inputValue) {
    // const endpoint = `http://universities.hipolabs.com/search?name=${inputValue}&country=${inputValue}`;
    const endpoint = `http://universities.hipolabs.com/search?{"$or":[{"name":"${inputValue}"},{"country":"${inputValue}"}]}`;
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw Error(respone.statusText);
    }
    const json = await response.json();
    return json;
}

// Output results in HTML
function createUniResults(matches) {
    matches.forEach(result => {
        const url = `${result['web_pages'][0]}`;

        // append the search result to the DOM
        searchResults.insertAdjacentHTML(
            'beforeend',
            `<div class="result-item">
                <h3 class="result-title">
                    <a href="${url}" target="_blank" rel="noopener">${result.name}</a>
                </h3>
                <a href="${url}" class="result-link" target="_blank" rel="noopener">${url}</a>
                <span class="result-snippet">${result.country}</span><br>
          </div>`
        );
    });



}


// can these be combined with an if/else?
function clearInput(query) {
    query.value = '';
}

function clearHTML(section) {
    section.innerHTML = '';
}

