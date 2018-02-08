import React from "react";
import {render} from "react-dom";
import { NavigationBar } from "./container/NavigationBar";
import { LoginBox } from "./container/LoginBox";
import Col from "react-materialize/lib/Col";

class App extends React.Component{
    render(){
        return(
            <div>
                <NavigationBar menu={["view_module","account_circle"]} menus={["Home","Login"]}/>
                <Col m={6} s={12}>
                <LoginBox/>
                </Col>
            </div>
        );
    }
}

render(<App/>,window.document.getElementById("app"));