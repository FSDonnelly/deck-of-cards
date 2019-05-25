import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
    constructor(props) {
        super(props);
        let angle = Math.random() * 90 - 45;
        let xPos = Math.random() * 40 - 20;
        let yPos = Math.random() * 40 - 20;
        this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`
    }
    render() {
        return (
            <div className="Card-area">
                <img
                    alt={this.props.name}
                    className="Card"
                    src={this.props.image}
                    style={{ transform: this._transform }}
                />
            </div>
        )
    }
}
export default Card;