import React from "react";

const PokemonsCard = ( { element}) => {
    return (
        <>
            <div>
                <h1> { element.name} </h1>
                <h2> { element.powerLevel} </h2>
                <h2> { element.aggresive ? "es agresivo" : "no es agresivo"} </h2>
                <img src= {element.avatar} alt="" />
            </div>
        </>
        )
}

export default PokemonsCard


