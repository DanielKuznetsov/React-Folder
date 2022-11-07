import React, {Component} from 'react';
import "./Box.css"

class Box extends Component {
    constructor(props) {
        super(props)
        this.handleBoxClick = this.handleBoxClick.bind(this);
    }

    handleBoxClick() {
        this.props.pick(this.props.value);
    }

    render() {
        return (
            <button onClick={this.handleBoxClick} style={{backgroundColor: this.props.bgColor}} className='Box'></button>
        )
    }
}

export default Box;