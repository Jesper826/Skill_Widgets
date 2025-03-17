const pokemonImage = document.getElementById("js--pokemon-image");
console.log(pokemonImage);
let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/50")
    .then(function(response) {
        return response.json();
    })
    .then(function(realData) {
        pokemonImage.src = realData.sprites.front_default;
    });
