import logo from './logo.svg';
import './App.css';

function App() {
  var today = new Date();
  var month = today.getMonth()+1;
  var date = today.getDate();
  var isValentinesDay = month == 2 && date == 14;
  var text = "";
  if (isValentinesDay){
    text = "YES";
  }else{
    text = "NO";
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      </header>
    </div>
  );
}

export default App;
