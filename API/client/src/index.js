import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {NextUIProvider} from "@nextui-org/react";
import theme from './theme';
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
import {BrowserRouter} from 'react-router-dom';


// const token = localStorage.getItem('token');
const client = new ApolloClient({
   uri:'https://jeremyjs-server.herokuapp.com/graphql',
   cache: new InMemoryCache(),
   headers:{
      authorization: localStorage.getItem('token')!==null?`Bearer ${localStorage.getItem('token')}`:''
   },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <ApolloProvider client={client}>
            <NextUIProvider theme={theme}>
               <App />
            </NextUIProvider>
         </ApolloProvider>
      </BrowserRouter>
   </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
