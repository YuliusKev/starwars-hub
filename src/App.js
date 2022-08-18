import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Characters from './components/Characters'
import MovieDetail from './components/MovieDetail'
import CharDetail from './components/CharDetail'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Dashboard/> } />
        <Route path="characters" element={ <Characters/> } />
        <Route path="movie-detail/:id" element={ <MovieDetail/> } />
        <Route path="characters/character-detail/:id" element={ <CharDetail/> } />
      </Routes>
    </div>
  );
}

export default App;
