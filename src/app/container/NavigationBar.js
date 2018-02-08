import React from "react";
import {Navbar} from "react-materialize";
import NavItem from "react-materialize/lib/NavItem";
import Icon from "react-materialize/lib/Icon";

export class NavigationBar extends React.Component{
    render(){
        return(
            <Navbar brand="React Application" right className="orange darken-4">
                {this.props.menu.map((menu,i) => <NavItem href="" key={i}><Icon className="left">{menu}</Icon>{this.props.menus[i]}</NavItem>)}
            </Navbar>
        );
    }
}