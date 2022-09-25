import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import "./HeaderBurgerMenu.css";

export class Example extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        
        return (
        <Menu>
            <a className="menu-item" href="#shop">Shop</a>
            <a className="menu-item" href="#membership">Membership</a>
            <a className="menu-item" href="#ourstory">Our Story</a>
            <a className="menu-item" href="#newsletter">Newsletter</a>
        </Menu>
        );
    }
    }