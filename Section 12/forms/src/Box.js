import React, {Component} from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.removeItem(this.props.boxId)
    }

    render() {
        return (
            <div>
                <div style={{
                    width: `${this.props.width}rem`, 
                    height: `${this.props.height}rem`, 
                    backgroundColor: this.props.bgColor
                }}></div>
                <button onClick={this.handleClick}>Remove the box!</button>
            </div>
        )
    }
}

export default Box;