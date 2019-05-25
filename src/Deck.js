import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

const API_BASE_URL = `https://deckofcardsapi.com/api/deck`;

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = { deck: null, drawn: [] };
        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
        this.setState({ deck: deck.data });
    }

    async getCard() {
        let id = this.state.deck.deck_id;
        try {
            let cardUrl = `${API_BASE_URL}/${id}/draw/`;
            let cardRes = await axios.get(cardUrl);
            if (!cardRes.data.success) {
                throw new Error("No cards remaining!")
            }
            let card = cardRes.data.cards[0];
            this.setState(st => ({
                drawn: [
                    ...st.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }))
        } catch (err) {
            alert(err);
        }
    }

    render() {
        return (
            <div className="Deck">
                <h1>Card Dealer</h1>
                <button onClick={this.getCard}>Get Card!</button>
                <Card />
            </div>
        )
    }
}

export default Deck;