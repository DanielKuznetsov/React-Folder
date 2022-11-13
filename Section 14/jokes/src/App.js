import './App.css';
import JokeList from './JokeList';

function App() {
  return (
    <div className="App">
      <JokeList numJokesToGet={5} />
    </div>
  );
}

export default App;
