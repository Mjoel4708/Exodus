import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Home, Profile, Error, Landing, Services, SingleService, SingleCategory, GeoMap } from './components';
const App = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  
  React.useEffect(() => {
      onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
      });
  }, []);
  return (
    
    
       <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          {user ? (
            <Switch>
              <Route path="/home" exact component={Home} />
              <Route path="/home/:title" exact component={SingleCategory} />
              <Route path="/services" exact component={Services} />
              <Route path="/services/:serviceId" exact component={SingleService} />
              <Route path="/profile" component={Profile} />
              <Route path="/map" exact component={GeoMap} />
              <Route path="*" component={Error} />
            </Switch>
          ): (
            
            <AmplifyAuthenticator />
          )}
          
        </Switch>
        
        
      </Router>
      
  
    
    
    
  );
  
}

export default App;
