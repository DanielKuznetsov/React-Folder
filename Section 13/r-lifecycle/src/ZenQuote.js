import React, {Component} from "react";
// import axios from 'axios'
import "./loader.css"

class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rNum: "",
            isLoaded: false,
        }
    }

    // This component triggers just once and is needed to start some action forever until we refresh the pafe or render a different component
    componentDidMount() {
        // axios.get("https://api.github.com/zen").then(response => {
        //     setTimeout(
        //         function() {
        //             this.setState({quote: response.data})
        //         }.bind(this), 3000
        //     )
        // }).catch(err => console.log(err))

        setTimeout(
            function() {
                this.setState({rNum: Math.floor(Math.random() * 50) + 1, isLoaded: true})
            }.bind(this), 3000
        )
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("INSIDE COMPONENT DID UPDATE")

        // Checking for previous state changes (old state or props)
        console.log(prevState.rNum);
        console.log(this.state.rNum);
    }

    render() {
        return (
            <div>
                {this.state.isLoaded ? (
                    <h1>Always remember... {this.state.rNum}</h1>
                ) : (
                    <div className="loader"></div>
                )}
            </div>
        )
    }
}

export default ZenQuote;