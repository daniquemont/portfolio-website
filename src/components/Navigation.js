import React, { Component } from 'react'

export class Navigation extends Component {
    render() {
        return (
            <nav className="navbar">
                <section className="nav-menu">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <p className="nav-item-number">00. Introductie</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-item-number">01. Ervaring</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-item-number">02. Skills</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-item-number">03. Portfolio</p>
                        </li>
                    </ul>
                </section>
            </nav>
        )
    }
}

export default Navigation
