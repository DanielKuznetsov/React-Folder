// const getMood = () => {
//     const moods = ["Angry", "Hungry", "Silly", "Quiet", "Paranoid"];

//     return moods[Math.floor(Math.random() * moods.length)];
// }

// class JSXDemo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>My Current Mood is: {getMood()}</h1>
//             </div>
//         )
//     }
// }

const getNum = () => {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if(num === 7) {
            msg = 
                <div>
                    <h2>Congrats! You win!</h2>
                    <img src="https://i/giphy.com/media/nXx0jZrbnbRxS/giphy.webp" />
                </div>;
        } else {
            msg = <p>Sorry, you lose!</p>
        }

        return (
            <div>
                <h1>Your number is: {num}</h1>
                {msg}

                {/* <p>{num === 7 ? "You got it!" : "Lost!"}</p>

                {/* Short circuting */}
                {/* {num === 7 && <img src="https://i/giphy.com/media/nXx0jZrbnbRxS/giphy.webp" />} */}
            </div>
        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));