const begin = document.querySelector('.btn');

// begin.addEventListener('click', pickCards);

const endpoint = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3";

// async function pickCards() {
//     begin.disabled = true;

//     try {
//         const response = await fetch(endpoint);
//         if (!response.ok) {
//             throw Error(response.statusText);
//         }
//     }
// }

fetch(endpoint)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    pastCard(data)
    // presentCard(data)
    // futureCard(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function pastCard(data) {
    const pastTitle = data.cards[0];
    const pastDiv = document.getElementById('past');

    // Name
    const pastName = pastTitle.name;
    const pastHeading = document.createElement("h2");
    pastHeading.innerHTML = pastName;
    pastDiv.appendChild(pastHeading);

    // Card meaning
    const pastMeaningUp = pastTitle['meaning_up'];
    const pastBody = document.createElement("p");
    pastBody.innerHTML = pastMeaningUp;
    pastDiv.appendChild(pastBody);

    // Arcana    
    const pastType = pastTitle.type;
    const pastBodyType = document.createElement("p");
    pastBodyType.innerHTML = pastType;
    pastDiv.appendChild(pastBodyType);

    // Suit
    const pastSuit = pastTitle.suit;
    const pastBodySuit = document.createElement("p");
    pastBodySuit.innerHTML = pastSuit;
    pastDiv.appendChild(pastBodySuit);

    // Value
    const pastValue = pastTitle.value;
    const pastBodyValue = document.createElement("p");
    pastBodyValue.innerHTML = pastValue;
    pastDiv.appendChild(pastBodyValue);
}

function futureCard(data) {
    const futureTitle = data.cards[0];
    const futureDiv = document.getElementById('future');

    // Name
    const futureName = futureTitle.name;
    const futureHeading = document.createElement("h2");
    futureHeading.innerHTML = futureName;
    futureDiv.appendChild(futureHeading);

    // Card meaning
    const futureMeaningUp = futureTitle['meaning_up'];
    const futureBody = document.createElement("p");
    futureBody.innerHTML = futureMeaningUp;
    futureDiv.appendChild(futureBody);

    // Arcana    
    const futureType = futureTitle.type;
    const futureBodyType = document.createElement("p");
    futureBodyType.innerHTML = futureType;
    futureDiv.appendChild(futureBodyType);

    // Suit
    const futureSuit = futureTitle.suit;
    const futureBodySuit = document.createElement("p");
    futureBodySuit.innerHTML = futureSuit;
    futureDiv.appendChild(futureBodySuit);

    // Value
    const futureValue = futureTitle.value;
    const futureBodyValue = document.createElement("p");
    futureBodyValue.innerHTML = futureValue;
    futureDiv.appendChild(futureBodyValue);
}

function presentCard(data) {
    const presentTitle = data.cards[0];
    const presentDiv = document.getElementById('present');

    // Name
    const presentName = presentTitle.name;
    const presentHeading = document.createElement("h2");
    presentHeading.innerHTML = presentName;
    presentDiv.appendChild(presentHeading);

    // Card meaning
    const presentMeaningUp = presentTitle['meaning_up'];
    const presentBody = document.createElement("p");
    presentBody.innerHTML = presentMeaningUp;
    presentDiv.appendChild(presentBody);

    // Arcana    
    const presentType = presentTitle.type;
    const presentBodyType = document.createElement("p");
    presentBodyType.innerHTML = presentType;
    presentDiv.appendChild(presentBodyType);

    // Suit
    const presentSuit = presentTitle.suit;
    const presentBodySuit = document.createElement("p");
    presentBodySuit.innerHTML = presentSuit;
    presentDiv.appendChild(presentBodySuit);

    // Value
    const presentValue = presentTitle.value;
    const presentBodyValue = document.createElement("p");
    presentBodyValue.innerHTML = presentValue;
    presentDiv.appendChild(presentBodyValue);
}


// function createTarotCard(tarot) {
//   const tarotEl = document.createElement('div');
//   tarotEl.classList.add('tarot');

//   const tarotInnerHTML = `
//     <div class="card">
//       <h2>${title}</h2>
//       <div class="box">
//         <p class="tarotName">Name: ${tarot.cards[0].name}</p>
//         <p class="tarotDesc">Meaning (upright): ${tarot.cards[0].meaning_up}</p>
//         <p class="tarotType">Type: ${tarot.cards[0].type}</p>
//         <p class="tarotValue">Value: ${tarot.cards[0].value}</p>
//         <p class
//       </div>
//     </div>
//   `;

//   tarotEl.innerHTML = tarotInnerHTML;
//   tarot_box.appendChild(tarotEl);
// }