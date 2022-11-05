import './App.css';
import Lottery from './Lottery';
import Ball from './Ball';

function App() {
  return (
    <div className="App">
      <Lottery nums={40}/>
      {/* <Ball num={1}/>
      <Ball num={1}/>
      <Ball num={1}/>
      <Ball num={1}/> */}
    </div>
  );
}

export default App;
