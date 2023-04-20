import './App.css';
import WdsUseSt from './components/WdsUseState';
import Boxes from './components/Boxes';
import StateChange from './components/StateChange';
import Header from './components/Header';
import StateChangeAdv from './components/StateChangeAdv';

function App() {

  return (
    <div className="App">

      <Header title="Hello here" />
      <Header />
      <hr />
      <StateChange />
      <hr />
      <StateChangeAdv />
      <hr />
      <WdsUseSt />
      <hr />
      <Boxes />

    </div>
  );
}

export default App;
