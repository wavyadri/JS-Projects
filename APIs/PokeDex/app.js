const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;

// create an obj with the type (from api) linked to corresponding colour of our choice
const colours = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const main_types = Object.keys(colours);

// we have 150 pokemon, so call function 150 times
const fetchPokemons = async () => {
    for(let i = 1; i <= pokemons_number; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const result = await fetch(url);
    const pokemon = await result.json();

    // create the cards using json data
    createPokemonCard(pokemon);
}

fetchPokemons();


function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    // some pokemon have 1+ types
    // we map over the array of types to extract only the type names
    // this returns an array only containing the types name
    const poke_types = pokemon.types.map(el => el.type.name);
    // then go over all the types, finding the 1st one in the array
    const type = main_types.find(type => poke_types.indexOf(type) > -1);

    // style name to make first letter uppercase then append the rest of the name (which was already in lower case)
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    // set colour to correspond with type (as defined in object above)
    const colour = colours[type];
    // apply the colour
    pokemonEl.style.backgroundColor = colour;
    
    const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
        </div>
        <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;

    pokemonEl.innerHTML = pokeInnerHTML;

    poke_container.appendChild(pokemonEl);
}

