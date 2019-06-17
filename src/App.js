import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import Auth from './Auth'

const auth = new Auth();


class App extends React.Component{
  login() {
    auth.login();
  }

  componentDidMount(){
    auth.login();
  }

  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
}



export default App;
