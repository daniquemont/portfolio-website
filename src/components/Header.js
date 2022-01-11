import React, { Component } from 'react'
import Logo from "../images/Logo.svg"
import Navigation from './Navigation'

export class Header extends Component {
    render() {
        return (
            <header>
                <img src={Logo} className="Logo" alt="Logo Danique Montanus"/>
                <Navigation></Navigation>
            </header>
        )
    }
}

export default Header
