class App extends React.Component {
    render() {
        return (
            <div>
               <h1><bold>Slot Machines!</bold></h1>
               <Machine />
               <Machine />
               <Machine />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));