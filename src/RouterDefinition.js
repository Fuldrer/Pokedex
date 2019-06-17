import React from 'react';
import { Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
import App from './App'
import Pokelist from './Pokelist'
import Pokelist2 from './Pokelist2'

class RouterDefinition extends React.Component{
    render(){
        return(
            <Router>
                <div> 
                    <Route exact path = "/" component={App}/>
                    <Route path = "/home" component={Home}/>
                    <Route path = "/pokelist" component={Pokelist2}/>
                </div>
            </Router>
        );
    }
}

export default RouterDefinition;