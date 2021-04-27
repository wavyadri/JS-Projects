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