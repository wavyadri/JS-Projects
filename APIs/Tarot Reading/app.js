// const original = document.querySelectorAll('holder');
// const originalHTML = original.innerHTML;
const past = document.getElementById('past');
const present = document.getElementById('present');
const future = document.getElementById('future');
const begin = document.querySelector('.btn-begin');
const restart = document.querySelector('.btn-restart');

const array = [past, present, future];
const numberOfCards = array.length;

const fetchTarot = async () => {
    await getTarot();
}

const getTarot = async () => {
  const endpoint = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3";
  const response = await fetch(endpoint);
  const tarot = await response.json();
  clear();
  createTarotCard(tarot);
}

// clear cards of any existing HTML
function clear() {
  past.innerHTML = '';
  present.innerHTML = '';
  future.innerHTML = '';
}

// set html back to how it originally was
// maybe use s/t like this 
    // cardEl.innerHTML = cardInnerHTML;
    //     final.appendChild(cardEl);
// function set() {
//   past.innerHTML = originalHTML;
//   present.innerHTML = originalHTML;
//   future.innerHTML = originalHTML;
// }

function createTarotCard(tarot) {
  for (let i = 0; i < numberOfCards; i++) {
    const final = array[i];
    const cardEl = document.createElement('div');
    cardEl.classList.add('box');
    const cardInnerHTML = `
        <div class="tarot-box">
          <h2 class="tarotName">${tarot.cards[i].name}</h2>
          <p class="tarotDesc"><b>Meaning (upright):</b> ${tarot.cards[i].meaning_up}</p>
          <p class="tarotType"><b>Type:</b> ${tarot.cards[i].type}</p>
          <p class="tarotValue"><b>Value:</b> ${tarot.cards[i].value}</p>
          <p class
        </div>
      </div>
    `;
    cardEl.innerHTML = cardInnerHTML;
    final.appendChild(cardEl);
  }
}

// Begin button
begin.addEventListener('click', fetchTarot);

// Start Again button
restart.addEventListener('click', clear);