fetch("https://pokeapi.co/api/v2/pokemon")
.then(res => res.json())
.then((pokemonList) => {
  console.log(pokemonList);
  pokemonList.results.forEach(pokemon => {
    document.querySelector("#list").innerHTML +=`
<button id="btn" onclick="getData('${ pokemon.url }')" class="col btn btn-cool-blues">${pokemon.name}</button>
    `
  })
});

// READ
function getData(url){
fetch(url)
.then((res)=>res.json())
.then((pokemon)=>{
  console.log(pokemon);
  document.querySelector("#results").innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${pokemon.name}</h5>
    <p class="card-text">${pokemon.height}</p>
    <p class="card-text">${pokemon.weight}</p>
    <p class="card-text">${pokemon.abilities[0].ability.name}</p>
  </div>
</div>





  `;
})
      };
      getData("https://pokeapi.co/api/v2/pokemon/pikachu");

      // SEARCH 
      // function searchPokemon():void
      // function searchPokemon(){
      //   const searchTerm = document.querySelector("#search").value
      //   const url = "https//pokeapi.co/api/vs/pokemon/" + searchTerm;
      //   getPokemoninfo(url);
      // }