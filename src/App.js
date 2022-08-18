import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Characters from './components/Characters'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Dashboard/> } />
        <Route path="characters" element={ <Characters/> } />
        {/* <Dashboard /> */}
        {/* <Characters/> */}
      </Routes>
    </div>
  );
}

export default App;
