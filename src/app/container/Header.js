import React from "react";
import {render} from "react-dom";
import { NavigationBar } from "./NavigationBar";

export class Header extends React.Component{
    render(){
        return(
            <NavigationBar menu={["view_module","account_circle"]} menus={["Home","Register"]}/>
        );
    }
}