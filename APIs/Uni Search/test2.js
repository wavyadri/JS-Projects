const searchBtn = document.getElementById('js-button');
searchBtn.addEventListener('click', formSubmit);

const form = document.getElementById('js-search-form');
form.addEventListener('submit', formSubmit);

const input = document.querySelector('.search-input');
const searchResults = document.getElementById('search-results');

async function formSubmit(e) {
    e.preventDefault(); 

    const inputValue = input.value.trim();
    clearInput(input);

    await getUni(inputValue);

    // Get matches to current text input
    const matches = uniList.filter(uni => {
    const regex = new RegExp(`^${inputValue}`,'gi');
    return uni.name.match(regex) || uni.country.match(regex);
    });

    clearHTML(searchResults);
    createUniResults(matches);
}

// const fetchUni = async () => {
//     await getUni;
// }

async function getUni(inputValue) {
    const endpoint = `http://universities.hipolabs.com/search?name=${inputValue}&country=${inputValue}`;
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw Error(respone.statusText);
    }
    const uniList = await response.json();
    return uniList;
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

