import React, {Component} from 'react';

class BoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "",
            height: "",
            bgColor: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();

        this.props.addItem(this.state);
        this.setState({width: "", height: "", bgColor: "", boxId: ""});
    }

    handleChange(evt ) {
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }

    render() {
        return (
            <form className='BoxForm' onSubmit={this.handleSubmit}>
                <div className='BoxForm-div'>
                    <label htmlFor='height'>Height:</label>
                    <input 
                        name='height'
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                </div>
                <div className='BoxForm-div'>
                    <label htmlFor='width'>Width:</label>
                    <input 
                        name='width'
                        value={this.state.width}
                        onChange={this.handleChange}
                    />
                </div>
                <div className='BoxForm-div'>
                    <label htmlFor='bgColor'>Background color:</label>
                    <input 
                        name='bgColor'
                        value={this.state.bgColor}
                        onChange={this.handleChange}
                    />
                </div>
                <div className='BoxForm-div'>
                    <label htmlFor='boxId'>Box ID:</label>
                    <input 
                        name='boxId'
                        value={this.state.boxId}
                        onChange={this.handleChange}
                    />
                </div>
                <button>Add a new box!</button>
            </form>
        )
    }
}

export default BoxForm;
