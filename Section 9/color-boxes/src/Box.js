import React, {Component} from 'react';
import "./Box.css"

class Box extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor: "",
        }
    }

    randomColor = () => Math.floor(Math.random()*16777215).toString(16);

    render() {
        return (
            <button style={{backgroundColor: `#${this.randomColor()}`}} className='Box'></button>
        )
    }
}

export default Box;