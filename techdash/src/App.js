import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuthenticator, AmplifyAuthenticator } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
//graph ql depandacies


import { Home,  Messages, Events, Form, Charts } from "./components";
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
        <Route path="/" exact component={() => <Home userName={user.username} /> } />
        <Route path="/events" exact component={Events} />
        <Route path="/messages" exact component={() => <Messages userName={user.username}/>} />
        <Route path="/reports" exact component={Charts} />
        
      </Switch>
    </Router>}
      
    </div>
  ): 
  (
    <AmplifyAuthenticator />
  )
}


export default withAuthenticator(App);
