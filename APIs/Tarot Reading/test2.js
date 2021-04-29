const tarot_box = document.getElementById('all_cards');
const past = document.getElementById('past');
const present = document.getElementById('present');
const cards_number = 3;

const fetchTarot = async () => {
  for (let i = 0; i < cards_number; i++) {
    await getTarot(i);
  }
}

const getTarot = async () => {
  const endpoint = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3";
  const response = await fetch(endpoint);
  const tarot = await response.json();
  createTarotCard(tarot);
}


function createTarotCard(tarot) {
  const tarotEl = document.createElement('div');
  tarotEl.classList.add('box');

  const tarotInnerHTML = `
      <div class="tarot-box">
        <p class="tarotName">Name: ${tarot.cards[0].name}</p>
        <p class="tarotDesc">Meaning (upright): ${tarot.cards[0].meaning_up}</p>
        <p class="tarotType">Type: ${tarot.cards[0].type}</p>
        <p class="tarotValue">Value: ${tarot.cards[0].value}</p>
        <p class
      </div>
    </div>
  `;

  tarotEl.innerHTML = tarotInnerHTML;
  tarot_box.appendChild(tarotEl);
}

fetchTarot();