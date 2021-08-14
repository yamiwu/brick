import ButtonGroup from './components/ButtonGroup';
import logo from './logo.svg';
import './App.css';

function App() {
  function onCancel() {
    console.log('onCancel');
  }
  function onConfirm() {
    console.log('onConfirm');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonGroup
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      </header>
    </div>
  );
}

export default App;
