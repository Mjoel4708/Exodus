import React from 'react'
import { Navbar, Values, Categories, Howitworks, Footer } from './';
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '.././aws-exports';
Amplify.configure(awsconfig);

const Home = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();
  
    React.useEffect(() => {
        onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);
    return authState === AuthState.SignedIn && user ? (
        <React.Fragment>
            <Navbar />
            <Values />
            <Categories />
            <Howitworks />
            <Footer />
        </React.Fragment>
    ): (
        <AmplifyAuthenticator />
    )
}

export default withAuthenticator(Home);
