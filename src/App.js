import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Characters from './components/Characters'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Dashboard /> */}
      <Characters/>
    </div>
  );
}

export default App;
