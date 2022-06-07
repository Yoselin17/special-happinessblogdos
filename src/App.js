import './App.css';
import Navbar from './componentes/Navbar';
import InformacionPersonajes from './componentes/informacionPersonajes';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Personajes from './componentes/personajes';
import injectContext from './Store/Appcontext';


function App() {
  return (<Router>
    <Navbar />
    <Route>
      <Switch>
        <Route exact path="/">
          <Personajes />
        </Route>
        <Route path="/detalles/personajes/:id" component={InformacionPersonajes}>
          <InformacionPersonajes />
        </Route>
      </Switch>
    </Route>
  </Router>
  );
}
export default injectContext(App);