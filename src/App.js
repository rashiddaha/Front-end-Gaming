import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar2 from "./components/Navbar2";
import Tournament from "./components/pages/Tournament";
import Footer from "./components/Footer";
import Games from "./components/pages/Games";

import Indgames from "./components/pages/Indgames";

function App() {
  return (
    <div>
      <Router>
        <Navbar2 />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tournament" component={Tournament} />
          <Route exact path="/game" component={Games} />
          {/* <Route exact path="/ind" component={Indgames} /> */}
          <Route exact path="/:game/:ind" component={Indgames} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
