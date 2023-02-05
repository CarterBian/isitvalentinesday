import 'inter-ui/inter.css';
import './App.css';
import ginkgo from './assets/ginkgo.gif';

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
  var vDay = new Date("02/14/2023");
  var difference = vDay.getTime() - today.getTime() / (1000*60*60*24) + 1;
  if (difference <= 0) {
    difference = 0;
  }else{
    difference = Math.floor(Math.abs(vDay.getTime() - today.getTime()) / (1000*60*60*24));
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={bear} alt="logo" /> */}
        <img src={ginkgo} alt="logo" />
        <p>{text}</p>
        <p1>{difference} days left!</p1>
      </header>
    </div>
  );
}

export default App;
