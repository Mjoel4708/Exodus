import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Login, Error, Landing, Services } from './components';
function App() {
  return (
    
    
       <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/login" component={Login} />
          <Route path="*" component={Error} />
        </Switch>
        
        
      </Router>
      
  
    
    
    
  );
  
}

export default App;
