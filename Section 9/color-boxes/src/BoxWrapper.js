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

    render() {
        return (
            <div>
                {this.state.numBox.map((el, i) => <Box key={i} />)}
            </div>
        )
    }
}

export default BoxWrapper;