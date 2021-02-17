import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Login, Error, Landing } from './components';
function App() {
  return (
    
    
       <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="*" component={Error} />
        </Switch>
        
        
      </Router>
      
  
    
    
    
  );
  
}

export default App;
