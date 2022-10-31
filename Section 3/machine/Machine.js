class Machine extends React.Component {
    render() {
        const fruits = ["🍇", "🍏", "🍒"]
    
        // Could have been done with a loop
        const fr1 = fruits[Math.floor(Math.random() * fruits.length)];
        const fr2 = fruits[Math.floor(Math.random() * fruits.length)];
        const fr3 = fruits[Math.floor(Math.random() * fruits.length)];
        const winner = (fr1 === fr2) && (fr2 === fr3);

        const styles = {fontSize: "3rem"};

        return (
            <div className="Machine">
                {/* Could have been done with -li- loop */}
                <span>{fr1}</span>
                <span>{fr2}</span>
                <span>{fr3}</span>
                <p 
                    className={winner ? "win" : "lose"} 
                    style={styles}>{winner ? "You won!" : "You lost!"}
                </p>
            </div>
        )
    }
}