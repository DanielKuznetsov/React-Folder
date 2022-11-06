import React, {Component} from 'react';
import "./Box.css"

class Box extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor: this.props.bgColor,
        }
        this.handleBoxClick = this.handleBoxClick.bind(this);
    }

    randomColor = () => Math.floor(Math.random()*16777215).toString(16);

    handleBoxClick() {
        this.setState(curState => ({bgColor: curState.bgColor = `#${this.randomColor()}`}))
    }

    render() {
        return (
            <button onClick={this.handleBoxClick} style={{backgroundColor: this.state.bgColor}} className='Box'></button>
        )
    }
}

export default Box;