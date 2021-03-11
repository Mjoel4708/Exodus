import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from "react-router-dom";
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Home,  Messages, Events, Form } from "./components";
Amplify.configure(awsconfig);




const App = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  

  React.useEffect(() => {
      onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
          
      });
  }, []);
  
  const [loggedIn, setLoggedIn ] = React.useState(true);
  
  return authState === AuthState.SignedIn && user ? (
    
    <div>
      
      {loggedIn ? <Form loggedIn={loggedIn} setLoggedIn={setLoggedIn} userEmail={user.attributes.email} userName={user.username} /> :
      <Router>
      

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/events" exact component={Events} />
        <Route path="/messages" exact component={Messages} />
        
      </Switch>
    </Router>}
      
    </div>
  ): 
  (
    <AmplifyAuthenticator />
  )
}

export default withAuthenticator(App);
