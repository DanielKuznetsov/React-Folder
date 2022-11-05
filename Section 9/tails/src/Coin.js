import React, {Component} from 'react';
import "./Coin.css"

class Coin extends Component {
    render() {
        let coin;

        if(this.props.coin === "head") {
            coin = <img src='https://i.ebayimg.com/images/g/xtcAAOSwLwBaZigS/s-l400.jpg' alt='Coin heads' />
        } else if(this.props.coin === "tail") {
            coin = <img src='https://m.media-amazon.com/images/I/51bcZy+HZpL._AC_SY580_.jpg' alt='Coin tails' />
        }
        
        return (
            <div className='Coin'>
                {coin}
            </div>
        )
    }
}

export default Coin;