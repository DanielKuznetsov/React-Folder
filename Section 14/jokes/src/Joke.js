import React, {Component} from 'react';

class Joke extends Component {
    render() {
        return (
            <div className='Joke'>
                <div className='Joke-buttons'>
                    <ion-icon onClick={this.props.upvote} name="arrow-up-outline"></ion-icon>
                    <span>{this.props.votes}</span>
                    <ion-icon onClick={this.props.downvote} name="arrow-down-outline"></ion-icon>
                </div>
                <div className='Joke-text'>{this.props.text}</div>
            </div>
        )
    }
}

export default Joke;