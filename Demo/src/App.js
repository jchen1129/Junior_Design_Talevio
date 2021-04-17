import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

//Pages
import index from "./pages/index";
import imaginePage from "./pages/imaginePage";
import imaginePage2 from "./pages/imaginePage2";
function App() {
  return <Router>
    <Switch>
      <Route exact path="/" component={index}/>
      <Route exact path="/imagine" component={imaginePage}/>
      <Route exact path="/imagine2" component={imaginePage2}/>
      </Switch>
  </Router>
}

export default App;