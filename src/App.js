import bear from './assets/bear.gif';
import './App.css';

function App() {
  var today = new Date();
  var month = today.getMonth()+1;
  var date = today.getDate();
  var isValentinesDay = month === 2 && date === 14;
  var text = "";
  if (isValentinesDay){
    text = "YES";
  }else{
    text = "NO";
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={bear} alt="logo" />
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
