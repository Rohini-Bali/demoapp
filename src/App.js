import logo from './logo.svg';
import './App.css';
import Greeting from './Demo';
import ExpenseDetail from './components/ExpenseDetail';

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting />
        <ExpenseDetail/>
      </header>
    </div>
  );
}

export default App;
