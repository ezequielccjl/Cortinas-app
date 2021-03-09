import { BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css';

//Components
import {Navbar} from './components/Navbar'
import {Landing} from './components/Landing'
import {WppButton} from './components/WppButton'
import {Contacto} from './components/Contacto'

//Productos
import {Verticales} from './components/products/Verticales'

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Navbar />
      <WppButton />
      
      <Switch>

        <Route exact path="/">
          <Landing />
        </Route>

        <Route path="/contacto">
          <Contacto />
        </Route>

        <Route path="/productos/verticales">
          <Verticales />
        </Route>

        

      </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
