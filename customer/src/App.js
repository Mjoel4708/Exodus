import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Profile, Error, Landing, Services, SingleService } from './components';
function App() {
  return (
    
    
       <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/services/:serviceId" exact component={SingleService} />
          <Route path="/profile" component={Profile} />
          <Route path="*" component={Error} />
        </Switch>
        
        
      </Router>
      
  
    
    
    
  );
  
}

export default App;
