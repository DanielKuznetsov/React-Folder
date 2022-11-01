import React, {Component} from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
    }

    getRandomNum = () => {
        let rand = Math.floor(Math.random() * 10) + 1;
        this.setState({num: rand})
    }

    render() {
        return (
            <div>
                <h1>Number is: {this.state.num}</h1>
                {this.state.num === 7 && <h2>YOU WIN!!!</h2>}
                {this.state.num !== 7 &&  <button onClick={this.getRandomNum}>Random Number</button>}
            </div>
        )
    }
}

export default Clicker;