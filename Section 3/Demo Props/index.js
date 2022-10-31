class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Ringo" 
                    from="Paul" 
                />
                <Hello 
                    to="George" 
                    bangs={4}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));