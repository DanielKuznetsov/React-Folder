class Slot extends React.Component {
    render() {
        const fruits = ["🍇", "🍏", "🍒"]
    
        const fr1 = fruits[Math.floor(Math.random() * fruits.length)];
        const fr2 = fruits[Math.floor(Math.random() * fruits.length)];
        const fr3 = fruits[Math.floor(Math.random() * fruits.length)];
        const winner = (fr1 === fr2) && (fr2 === fr3);

        return (
            <div>
                <span>{fr1}</span>
                <span>{fr2}</span>
                <span>{fr3}</span>
                <p>{winner ? "You won!" : "You lost!"}</p>
            </div>
        )
    }
}