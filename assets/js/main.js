const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadmoreButtom')
const limit = 5
const offset = 0


//pokemonList.innerHTML += '<li>AAAAAAAAAAAAAAAAAAAAAAA</li>' 
function loadPokemonItens(offset,limit){
    function convertPokemonToHtmlLi(pokemon) {
        return `
        <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name} </span>
                   <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}" >${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">
                   </div>  
                </li>  
        `        
    }
    pokeApi.getPokemons(offset,limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToHtmlLi).join('')  
        pokemonList.innerHTML += newHtml 
        /*
        const newListItems = pokemon.map((value) =>{
            return convertPokemonToHtmlLi(pokemon)
        })
        const newHtml = newListItems.join('')
        pokemonList.innerHTML += newHtml
        -Segunda maneira só que melhor para leitura da linha 22
        ---------------------------------------------------------
        for (let index = 0; index < pokemons.length; index++) { 
            const pokemon = pokemons[index];
            listItems.push(convertPokemonToHtmlLi(pokemon))
        }
        Sintaxe alternativa sem o uso do map() */
           
    })
}

loadMoreButton.addEventListener('click', () => {
    loadPokemonItens()
})