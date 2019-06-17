import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import Auth from './Auth'
import Pokes from './Pokelist'
import TitlebarGridList from './Pokelist';

const auth = new Auth();

class Home extends React.Component{
    constructor(props){
        super(props);     
        this.state = {
            pokemon: [
                {
                        name:'Jumpluff',
                        img: "https://vignette.wikia.nocookie.net/es.pokemon/images/4/43/Jumpluff.png/revision/latest/scale-to-width-down/350?cb=20151017005916" ,
                }
            ]
        }   
    }
    logout(){
        auth.logout();
    }
    render(){
        return(
            <div>
            <h1>Home</h1>
            <button onClick={this.logout} >Logout</button>
            </div>
        )
    }
}

export default Home;