import React, {Component} from 'react';
import "./Card.css"

class Card extends Component {
    constructor(props) {
        super(props);
        let angel = Math.random() * 90 - 45;
        let xPos = Math.random() * 40 - 20;
        let yPos = Math.random() * 40 - 20;

        this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angel}deg)`
    }

    render() {
        // ! Otherwise it will re-render again because as soon as the parent 
        // ! component re-renders, its children re-render as well 
        // let angel = Math.random() * 90 - 45;
        // let xPos = Math.random() * 40 - 20;
        // let yPos = Math.random() * 40 - 20;

        // let transform = `translate(${xPos}px, ${yPos}px) rotate(${angel}deg)`

        return (
            <img style={{transform: this._transform}} className='Card' src={this.props.image} alt={this.props.name} />
        )
    }
}

export default Card;