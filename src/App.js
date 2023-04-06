import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails.js'
import LandingPage from './pages/LandingPage';
import { FaFilm } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <header>
        <div className='logo'>
        <Link to='/'>
      <FaFilm className='icono'/> 
        <h1 className='title'>Movies</h1>
        </Link>
        </div>
      </header>
      <main className='landingPage'>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route exact path="/movies/:movieId" element={<MovieDetails/>}/>
        </Routes>
      </main>
      </Router>
  );
}

export default App;
