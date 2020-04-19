import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Tracker1 from "./Tracker1";
import Tracker2 from "./Tracker2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/tracker1" exact component={Tracker1} />
          <Route path="/tracker2" exact component={Tracker2} />
        </Switch>
      </div>
    </Router>
  );
}

//Switch picks first route that works

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
