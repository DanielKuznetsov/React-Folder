import React, {Component} from 'react';
import Box from './Box';
import BoxForm from './BoxForm';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                {
                    height: "10",
                    width: "20",
                    bgColor: "#fff234",
                    boxId: "2131",
                }
            ],
        }
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem(item) {
        // const newItem = {...item, add something new}

        this.setState(state => ({
            boxes: [...state.boxes, item]
        }))
    }

    removeItem(item) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.boxId !== item)
        })
    }

    render() {
        return (
            <div>
                <BoxForm addItem={this.addItem}/>
                {this.state.boxes.map((box, index) => 
                    <Box 
                        key={index} 
                        width={box.width} 
                        height={box.height} 
                        bgColor={box.bgColor} 
                        removeItem={this.removeItem}
                        boxId={box.boxId}
                />)}
            </div>
        )
    }
}

export default BoxList;
