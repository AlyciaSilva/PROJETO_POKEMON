function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToHtmlLi(pokemon) {
    return `
    <li class="pokemon">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name} </span>
               <div class="detail">
                <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                </ol>
                <img src="${pokemon.sprites.other.dream_world.front_default}" 
                alt="${pokemon.name}">
               </div>  
            </li>  
    `        
}

const pokemonList = document.getElementById('pokemonList')

//pokemonList.innerHTML += '<li>AAAAAAAAAAAAAAAAAAAAAAA</li>' 
pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToHtmlLi).join('')  
    pokemonList.innerHTML = newHtml 
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

