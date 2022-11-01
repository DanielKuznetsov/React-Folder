import React, {Component} from "react";
import './PokeCard.css'

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

class PokeCard extends Component {
    render() {
        let imgSrc = `${POKE_API}${this.props.id}.png`

        return (
            <div className="PokeCard">
                <h1 className="PokeCard-title">{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}/>
                <div className="PokeCard-data">Type: {this.props.type}</div>
                <div className="PokeCard-data">EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default PokeCard;