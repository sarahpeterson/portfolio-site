import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Countdown from './Countdown';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/countdown" component={Countdown} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
