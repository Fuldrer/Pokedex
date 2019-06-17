import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'carlos-molina.auth0.com',
    clientID: 'S1WNxy2Upk7DIjSpidHnYea7YdkvltEP',
    redirectUri: 'http://localhost:3000/pokelist',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }

  logout(){
    this.auth0.logout({
      returnTo: window.location.origin
    })
  }
}