class App extends React.Component {
    render() {
        return (
            <div>
                <Friend
                    name="Elton"
                    hobbies={["Piano", "Singing", "Dancing"]}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));