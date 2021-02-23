import logo from './logo.svg';
import './App.css';

//Components
import {Navbar} from './components/Navbar'
import {Landing} from './components/Landing'
import {WppButton} from './components/WppButton'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Website under development...
        </p>
      </header>

      <WppButton />

    </div>
  );
}

export default App;
