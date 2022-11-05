import React from 'react'
import Ball from "./Ball"
import "./Lottery.css"

class Lottery extends React.Component {
    static defaultProps = {
        title: "Loto",
        maxBalls: 6,
        maxNum: 40,
    }

    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({length: this.props.maxBalls})
        }
        this.handleClick = this.handleClick.bind(this);
    }

    generate() {
        this.setState(currState => ({
            nums: currState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum + 1) )
        }))
    }

    handleClick() {
        this.generate();
    }

    render() {
        return (
            <section className='Lottery'>
                <h1>{this.props.title}</h1>
                <div className='Lottery-balls'>
                   {this.state.nums.map((el, i) => <Ball key={i} num={el} />)}
                </div>
                <button onClick={this.handleClick}>generate!</button>
            </section>
        )
    }
}

export default Lottery;