import React, {Component} from 'react';
import Box from './Box';

class BoxWrapper extends Component {
    static defaultProps = {
        boxes: 18,
        color: "#fff",
    }

    constructor(props) {
        super(props);
        this.state = {
            numBox: Array.from({length: this.props.boxes}, el => `#${this.randomColor()}`),
        }
        this.pickColor = this.pickColor.bind(this);
    }

    randomColor = () => Math.floor(Math.random()*16777215).toString(16);

    pickColor(index) {
        this.setState(st => ({numBox: st.numBox.map(col => col === this.state.numBox[index] 
            ? col = `#${this.randomColor()}` 
            : col)}))
    }

    render() {
        return (
            <div>
                {this.state.numBox.map((el, i) => 
                    <Box key={i} value={i} bgColor={this.state.numBox[i]} pick={this.pickColor} />)}
            </div>
        )
    }
}

export default BoxWrapper;