// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import MovieDetails from './components/movieDetails/MovieDetails';
import Movies from './pages/Movies';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path='/movies' element={<Movies/>}/>
    </Routes>
  </Router>

  );
}

export default App;
