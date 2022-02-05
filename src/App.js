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
  var vDay = new Date("02/14/2022");
  var difference = Math.ceil(Math.abs(vDay.getTime() - today.getTime()) / (1000*60*60*24));
  return (
    <div className="App">
      <header className="App-header">
        <img src={bear} alt="logo" />
        <p>{text}</p>
        <p1>{difference} days left!</p1>
      </header>
    </div>
  );
}

export default App;
