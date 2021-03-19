import { BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css';

//Components
import {Navbar} from './components/Navbar'
import {Landing} from './components/Landing'
import {WppButton} from './components/WppButton'
import {Contacto} from './components/Contacto'
import {Galeria} from './components/Galeria'

//Productos
import {ProductoContainer} from './components/ProductoContainer'

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

        <Route path="/galeria">
          <Galeria />
        </Route>

        <Route path="/productos/:idProducto">
          <ProductoContainer />
        </Route>

        

      </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
