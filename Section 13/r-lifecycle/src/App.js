import './App.css';
// import DidMount from './DidMount';
// import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';

function App() {
  return (
    <div className="App">
      {/* <DidMount /> */}
      {/* <ZenQuote /> */}
      <GithubUserInfo chNo={1} /> 
      {/* <GithubUserInfo chNo={2} /> 
      <GithubUserInfo chNo={3}/>  */}
    </div>
  );
}

export default App;
