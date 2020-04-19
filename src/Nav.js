import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  return (
    <nav>
      <h2>CoronaVirus Tracker for Nature Parks and Reserves (Pairs with EchoAR)</h2>
      <ui className="nav-links">
        <Link to="/about">
          <Button variant="primary" size="lg">
            About
          </Button>
        </Link>
        <Link to="/tracker1">
          <Button variant="primary" size="lg">
            Parks
          </Button>
        </Link>
        <Link to="/tracker2">
          <Button variant="primary" size="lg">
            Trails
          </Button>
        </Link>
      </ui>
    </nav>
  );
}

//coment

export default Nav;
