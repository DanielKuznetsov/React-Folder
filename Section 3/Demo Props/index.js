class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Ringo" 
                    from="Paul" 
                    bangs={4}
                    img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));