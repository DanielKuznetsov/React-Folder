import React, {Component} from "react";

class DidMount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({
                time: new Date(),
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>{this.state.time.getSeconds()}</h1>
            </div>
        )
    }
}

export default DidMount;
