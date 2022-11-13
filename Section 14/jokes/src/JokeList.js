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
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if(this.state.jokes.length === 0) this.getJokes();
    }

    async getJokes() {
        let jokesArr = [];

        while(jokesArr.length <= this.props.numJokesToGet) {
            let res = await axios.get("https://icanhazdadjoke.com/", {
                headers: {
                    "Accept": "application/json"
                }
            });

            jokesArr.push({id: uuidv4(), text: res.data.joke, votes: 0});
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

        return (
            <div className='JokeList'>
                <div className='JokeList-sidebar'>
                    <h1 className='JokeList-title'> <span>Dad</span> Jokes!</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt='Joke Logo'/>
                    <button onClick={this.handleClick} className='JokeList-getmore'>New Jokes!</button>
                </div>

                <div className='JokeList-jokes'>
                    {this.state.jokes.map(joke => (
                        <Joke 
                            key={joke.id} 
                            votes={joke.votes} 
                            text={joke.text} 
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