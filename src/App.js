import logo from './logo.svg';
import './App.css';
import Greeting from './Demo';
import ExpenseItem from './components/ExpenseItem'

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting />
        <ExpenseItem/>
      </header>
    </div>
  );
}

export default App;
