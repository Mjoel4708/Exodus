import React from "react";
import App from "./App";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";
import { BrowserRouter } from 'react-router-dom';
const httpLink = createHttpLink({
    uri: "http://localhost:5000"

})
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})
export default(
    <ApolloProvider client={client}>
        
            <App />
        
    </ApolloProvider>
)