import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import { Home,  Messages, Events } from "./components";


function App() {
  return (
    <div>
      <Route>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" exact component={Events} />
          <Route path="/messages" exact component={Messages} />
        </Switch>
      </Route>
    </div>
  );
}

export default App;
