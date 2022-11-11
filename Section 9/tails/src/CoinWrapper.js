import React, {Component} from 'react';
import Coin from "./Coin"

class CoinWrapper extends Component {
    static defaultProps = {
        options: ["head", "tail"],
    }

    constructor(props) {
        super(props);
        this.state = {
            heads: 0,
            tails: 0,
            side: "",
            flips: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    generate() {
        const side = this.props.options[Math.floor(Math.random() * 2)];

        if(side === "head") {
            this.setState(curState => ({heads: curState.heads + 1, side: curState.side = "head"}))
        } else {
            this.setState(curState => ({tails: curState.tails + 1, side: curState.side = "tail"}))
        }

        this.setState(curState => ({flips: curState.flips + 1}))
    }

    handleClick() {
        this.generate();
    }

    render() {
        return (
            <div>
                <h1>Let's flip a coin!</h1>
                <Coin coin={this.state.side}/>
                <button onClick={this.handleClick}>Click to flip!</button>
                <p>Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p>
            </div>
        )
    }
}

export default CoinWrapper;