import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';


const domain = process.env.REACT_APP_AUTH0_DOMAIN=dev-thecrick.us.auth0.com;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID= 1Ua3irUsXMhC6uKEfDTyaF6GQNEjCLha;

ReactDOM.render(
  <Auth0Provider
    domain="dev-thecrick"
    clientID={1Ua3irUsXMhC6uKEfDTyaF6GQNEjCLha}
    redirectURI={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
