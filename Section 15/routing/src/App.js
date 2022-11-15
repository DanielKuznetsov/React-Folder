import './App.css';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Dog from './Dog';
import About from './About';
import Home from './Home';
import NotFoundPage from './NotFoundPage';
import BookRoutes from './BookRoutes';
import "./styles.css"

function App() {
  return (
    <>
    <Routes>
      <Route path='/books' element={<h1>Extra content!</h1>} />
    </Routes>

    <nav>
      <ul>
        {/* <li><NavLink style={({isActive}) => { return isActive ?  {color: "red"} : {}}} to="/">Home</NavLink></li> */}
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/dog">Dog</NavLink></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/books">Books</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dog' element={<Dog/>} />
      <Route path='/about' element={<About/>} />
      <Route path='*' element={<NotFoundPage/>} />

      <Route path='/books/*' element={<BookRoutes />} />

      {/* <Route path='/books' element={<BookLayout />} >
        <Route index element={<Books />} />
        <Route path=':id' element={<Book/>} />
      </Route> */}

      {/* <Route path='/books' element={<Books/>} />
      <Route path='/books/:id' element={<Book/>} /> */}
    </Routes>
    </>
  );
}

export default App;
