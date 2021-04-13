import './App.css';
import Body from './components/Body' ;
import adultIcon from '../src/assets/images/groupIcon.png'

function App() {
  return (
    <div className="App">
      <div className="content">
      <header className="header">
        <img src={adultIcon} alt="aa"/>Choose Number Of people
       </header>
       <Body/>
       </div>
    </div>

  );
}

export default App;
