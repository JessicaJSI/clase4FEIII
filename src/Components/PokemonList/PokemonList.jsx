import Pokemons from "../Pokemons/Pokemons"
import "./PokemonList.css"

export const PokemonList = ( ) => {
    
    let types = {"water":"color4", "air":"color3", "fire":"color1", "electric":"color2"}

    return (
        /*
        <h1>Hola {props.name} </h1>
        */
       <div>
        {
            Object.entries(types).map( ([key,value]) => (
                <div className={value}>
                    <Pokemons type={key}  />
                </div>)
        )}
        
       </div>
        )
}