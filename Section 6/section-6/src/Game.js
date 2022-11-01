import React, {Component} from  "react"

class Game extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         gameOver: false,
    //         score: 0
    //     }
    // }

    // Alternative syntax
    state = {
        gameOver: true,
        score: 99
    }
    

    render() {        
        return (
            <div>
                <p>Your Score Is: {this.state.score}.</p>
            </div>
        )
    }
}

export default Game;