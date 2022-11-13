import React, {Component} from 'react';
import axios from 'axios';
import "./JokeList.css"
import Joke from './Joke';
import { v4 as uuidv4 } from 'uuid';

class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10,
    }

    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
            isLoading: false,
        }
        this.seenJokes = new Set(this.state.jokes.map(j => j.text));
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if(this.state.jokes.length === 0) this.getJokes();
    }

    // !!!
    async getJokes() {
        let jokesArr = [];

        while(jokesArr.length < this.props.numJokesToGet) {
            let res = await axios.get("https://icanhazdadjoke.com/", {
                headers: {
                    "Accept": "application/json"
                }
            });

            let newJoke = res.data.joke;
            if(!this.seenJokes.has(newJoke)) {
                jokesArr.push({id: uuidv4(), text: newJoke, votes: 0});
            } else {
                console.log("FOUND A DUPLICATE")
                console.log(newJoke)
            }
        }

        this.setState(state => ({
            isLoading: false,
            jokes: [...state.jokes, ...jokesArr]
        }),
        () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        )       
    }

    handleVote(id, delta) {
        this.setState(state => ({
            jokes: state.jokes.map(j => 
                    j.id === id ? {...j, votes: j.votes + delta} : j
                )
        }),
        () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        );
    }

    handleClick() {
        this.setState({isLoading: true});
        this.getJokes()
    }

    render() {
        if(this.state.isLoading) {
            return (
                <div className='JokeList-spinner'>
                    <div className="spinner">
                        <ion-icon name="refresh-outline"></ion-icon>
                    </div>
                    <h1 className='JokeList-title'>Loading...</h1>
                </div>
            )
        }

        let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes)

        return (
            <div className='JokeList'>
                <div className='JokeList-sidebar'>
                    <h1 className='JokeList-title'> <span>Dad</span> Jokes!</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt='Joke Logo'/>
                    <button onClick={this.handleClick} className='JokeList-getmore'>New Jokes!</button>
                </div>

                <div className='JokeList-jokes'>
                    {jokes.map(joke => (
                        <Joke 
                            key={joke.id} 
                            votes={joke.votes} 
                            text={joke.text} 
                            // !!!
                            upvote={() => this.handleVote(joke.id, 1)} 
                            downvote={() => this.handleVote(joke.id, -1)}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default JokeList;