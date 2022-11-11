import React, {Component} from 'react';
import axios from 'axios';
import "./loader.css"

class GithubUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: "",
            name: "",
            isLoaded: false,
        };
    }

    async componentDidMount() {
        const URL = `https://www.breakingbadapi.com/api/characters/${this.props.chNo}`;
        let res = await axios.get(URL)

        setTimeout(
            function() {
                const data = res.data[0];
                this.setState({imgUrl: data.img, name: data.name, isLoaded: true});
            }.bind(this), 2000
        )
    }

    render() {
        return (
            <div>
                {this.state.isLoaded ? (
                    <div>
                        <h1>Braking Bad Characters</h1>
                        <img style={{width: "300px", height: "300px"}} src={this.state.imgUrl} />
                        <h2>{this.state.name}</h2>
                    </div>
                ) : (
                    <div className='loader'></div>
                )}
            </div> 
        )
    }
}

export default GithubUserInfo;