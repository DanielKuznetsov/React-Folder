import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();

        alert(`You typed: ${this.state.username}`)
        this.setState({username: ""});
    }

    render() {
        return (
            <div>
                <h1>Form Demo!</h1>
                <p>{this.state.username}</p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username' name="username">Your username:</label>
                    <input 
                        type="text" 
                        name='username'
                        value={this.state.username} 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="email" 
                        name='email'
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        placeholder='Email'
                    />
                    <input 
                        type="password" 
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange} 
                        placeholder='Password'
                    />

                    <button>Submit!</button>
                </form>
            </div>
        )
    }
}

export default Form;