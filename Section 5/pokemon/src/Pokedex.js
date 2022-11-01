import React, {Component} from "react"
import PokeCard from "./PokeCard";
import "./Pokedex.css"

class Pokedex extends Component {
    render() {
        let title;  
        if(this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand!</h1>
        } else {
            title = <h1 className="Pokedex-loser">Losing Hand!</h1>
        }

        return (
            <div className="Pokedex">
                {title}
                <h4>Total Experience: {this.props.exp}</h4>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map(pok => 
                        <PokeCard
                            key={pok.id}
                            id={pok.id}
                            name={pok.name}
                            type={pok.type}
                            exp={pok.base_experience}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Pokedex;