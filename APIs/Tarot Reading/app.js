// const tarot_box = document.getElementById('all_cards');
const past = document.getElementById('past');
const present = document.getElementById('present');
const future = document.getElementById('future');
const begin = document.querySelector('.btn-begin');

const fetchTarot = async () => {
    await getTarot();
}

const getTarot = async () => {
  const endpoint = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3";
  const response = await fetch(endpoint);
  const tarot = await response.json();
  // insert a clear div function
  clear();
  createTarotCard(tarot);
}

// create a clear div function
function clear() {
  past.innerHTML = '';
  present.innerHTML = '';
  future.innerHTML = '';
}


function createTarotCard(tarot) {
  const pastEl = document.createElement('div');
  pastEl.classList.add('box');
  const pastInnerHTML = `
      <div class="tarot-box">
        <h2 class="tarotName">${tarot.cards[0].name}</h2>
        <p class="tarotDesc">Meaning (upright): ${tarot.cards[0].meaning_up}</p>
        <p class="tarotType">Type: ${tarot.cards[0].type}</p>
        <p class="tarotValue">Value: ${tarot.cards[0].value}</p>
        <p class
      </div>
    </div>
  `;
  pastEl.innerHTML = pastInnerHTML;
  past.appendChild(pastEl);

  const presentEl = document.createElement('div');
  presentEl.classList.add('box');
  const presentInnerHTML = `
      <div class="tarot-box">
        <h2 class="tarotName">${tarot.cards[1].name}</h2>
        <p class="tarotDesc">Meaning (upright): ${tarot.cards[1].meaning_up}</p>
        <p class="tarotType">Type: ${tarot.cards[1].type}</p>
        <p class="tarotValue">Value: ${tarot.cards[1].value}</p>
        <p class
      </div>
    </div>
  `;
  presentEl.innerHTML = presentInnerHTML;
  present.appendChild(presentEl);

  const futureEl = document.createElement('div');
  futureEl.classList.add('box');
  const futureInnerHTML = `
      <div class="tarot-box">
        <h2 class="tarotName">${tarot.cards[2].name}</h2>
        <p class="tarotDesc">Meaning (upright): ${tarot.cards[2].meaning_up}</p>
        <p class="tarotType">Type: ${tarot.cards[2].type}</p>
        <p class="tarotValue">Value: ${tarot.cards[2].value}</p>
        <p class
      </div>
    </div>
  `;
  futureEl.innerHTML = futureInnerHTML;
  future.appendChild(futureEl);
}

// fetchTarot();

begin.addEventListener('click', fetchTarot);
