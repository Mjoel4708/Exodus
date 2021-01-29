import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import ThemeSwitcher from 'react-theme-switcher';
import { Home, Login, Error } from './components';
function App() {
  return (
    
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="*" component={Error} />
        </Switch>
        
        
      </Router>
      
  
    
    
    
  );
  
}
const home = () =>{
  <div>
    <p>Hello world</p>
  </div>
}

export default App;
