import React, {Component} from 'react';
import axios from 'axios';
import Card from './Card';
import "./Deck.css"

const API_BASE_URL = "https://deckofcardsapi.com/api/deck"

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: null, drawn: []
        }
        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount() {
        const deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
        this.setState({deck: deck.data});
    }

    async getCard() {
        let id = this.state.deck.deck_id;

        try {
            let cardUrl = `${API_BASE_URL}/${id}/draw/`;
            let cardRes = await axios.get(cardUrl);

            if(!cardRes.data.success) {
                throw new Error("No Cards Remaining!")
            }

            let card = cardRes.data.cards[0];

            this.setState(state => ({
            drawn: [
                ...state.drawn, 
                {
                    id: card.code,
                    image: card.image,
                    name: `${card.value} of ${card.suit}`
                }
                ]
            }))
        } catch(err) {
            alert(err)
        }
    }

    render() {
        const cards = this.state.drawn.map(card => (
            <Card name={card.name} image={card.image} key={card.id}/>
        ))

        return (
            <div>
                <h1>Card Dealer!</h1>
                <button onClick={this.getCard}>Get Card!</button>
                <div className='Deck-cards'>
                    {cards}
                </div>
            </div>
        )
    }
}

export default Deck;