class App extends React.Component {
    render() {
        return (
            <div>
               <h1><bold>Slot Machines!</bold></h1>
               <Slot />
               <Slot />
               <Slot />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));