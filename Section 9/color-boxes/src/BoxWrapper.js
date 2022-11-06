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
            numBox: Array.from({length: this.props.boxes}),
        }
    }

    randomColor = () => Math.floor(Math.random()*16777215).toString(16);

    render() {
        return (
            <div>
                {this.state.numBox.map((el, i) => <Box key={i} bgColor={`#${this.randomColor()}`} />)}
            </div>
        )
    }
}

export default BoxWrapper;