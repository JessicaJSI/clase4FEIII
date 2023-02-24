import React from "react";

import pokemonsJson from "../../../pokemons.json" 
import PokemonsCard from "../PokemonsCard/PokemonsCard"

const Pokemons = ( { type } ) => {
    let pokemonsByType = pokemonsJson[type]

    return (
        <div>
            {
                pokemonsByType.map((element) => {
                    return (
                        <PokemonsCard element={element} key={element.id} />
                        )
                })
            }
        </div> 
            
    
    )
}

export default Pokemons;