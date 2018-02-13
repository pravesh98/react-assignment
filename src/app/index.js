import React from "react";
import {render} from "react-dom";
import { LoginBox } from "./container/LoginBox";
import Col from "react-materialize/lib/Col";
import { Header } from "./container/Header";
import {BrowserRouter as Router , Switch , Route , Link } from "react-router-dom";
import { RegisterBox } from "./container/RegisterBox";
import {Navbar} from "react-materialize";
import NavItem from "react-materialize/lib/NavItem";
import Icon from "react-materialize/lib/Icon";


class App extends React.Component{
    render(){
        return(
                <Router>
                   <div>
                   <Navbar brand="React Application" right className="orange darken-4">
                   <NavItem><Link to={'/'}><Icon className="left">view_module</Icon>Home</Link></NavItem>
                   <NavItem><Link to={'/register'}><Icon className="left">view_module</Icon>ResHome</Link></NavItem>
                    {/* <ul>
                        <li><Link to={'/'}></Link>Home</li>
                        <li><Link to={'/register'}>Register</Link></li>
                    </ul> */}
                    <hr />
                    <Switch>
                        <Route exact path="/" component={LoginBox} />
                        <Route path="/register" component={RegisterBox} />
                        </Switch>
                        </Navbar>
                        </div>
                    </Router>   
        );
    }
}

export default App;
//render(<App/>,window.document.getElementById("app"));