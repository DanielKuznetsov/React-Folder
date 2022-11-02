import React, {Component} from 'react';
import Die from './Die';
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        sides: ['', "one", "two", "three", "four", "five", "six"],
    }

    constructor(props) {
        super(props);
        this.state = {
            die1: "one",
            die2: "one",
            isRolling: false,
        }
    }

    handleRollClick = () => {
        let rand1 = Math.floor(Math.random() * (this.props.sides.length - 1)) + 1;
        let rand2 = Math.floor(Math.random() * (this.props.sides.length - 1)) + 1;

        this.setState({die1: this.props.sides[rand1], die2: this.props.sides[rand2], isRolling: true});

        setTimeout(() => {
            this.setState({isRolling: false});

        }, 1000);
    }

    render() {
        return (
            <div>
                <Die face={this.state.die1} rolling={this.state.isRolling}/>
                <Die face={this.state.die2} rolling={this.state.isRolling}/>  

                <button onClick={this.handleRollClick} className='RollDice-btn' disabled={this.state.isRolling}>
                    {this.state.isRolling ? "Rolling..." : "Roll Dice"}
                </button> 
            </div>
        )
    }
}

export default RollDice;