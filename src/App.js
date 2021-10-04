import './App.css';
import Nav from './component/Nav';
import Home from './component/Home';
import About from './component/About';
import Library from './component/Library';
import Lessons from './component/Lessons';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/library">
          <Library />
        </Route>
        <Route path="/lessons">
          <Lessons />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
