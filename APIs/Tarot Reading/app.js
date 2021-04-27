const begin = document.querySelector('.btn');
const spinner = document.querySelectorAll('#js-spinner');

begin.addEventListener('click', pickCards);

const endpoint = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3";

function pickCards() {
    spinner.classList.remove('hidden');
    begin.disabled = true;
}