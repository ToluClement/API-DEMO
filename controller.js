window.onload =() => {
    document.querySelector("#submit").addEventListener("click", getNewPokemon);
}


function getNewPokemon() {
    /*
         1. Make a call to an API _DONE_
         2. Wait for the API to respond _DONE_
         3.Get the response data _DONE_
         4. Put the response data in the HTML
    */
    let pokemonName = document.querySelector("#pokemon-input").value;
    getpokemon(pokemonName).then(resultJson => {
        populateHTML(resultJson);
    }) ;
}

async function getpokemon(pokemonName) {
    let endpoint ="https://pokeapi.co/api/v2/pokemon/" + pokemonName;
    let req = new Request(endpoint);
    let response = await fetch (req);
    return response.json(); 
}

function populateHTML(pkmJson) {
    let header = document.querySelector("#pokemon-name");
    let img = document.querySelector("#pokemon-sprite");

    header.innerHTML = getpokemonName(pkmJson);
    img.setAttribute("src", getpokemonSprite(pkmJson));

}

function getpokemonName(pkmJson) {
    return capitalize (pkmJson.name);
}

function getpokemonSprite(pkmJson) {
    return pkmJson["sprites"]["front_shiny"];
}

function capitalize(string) {
    let start = string.substring(0, 1).toUpperCase();
    let body = string.substring(1).toLowerCase();
    return start + body;
}