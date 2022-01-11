import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Socials extends Component {
    render() {
        return (
            <section className='socials'>
                <div className='socials-group'>
                    <a href="https://github.com/daniquemont" className='social-icon'><i className="fab fa-github-square"></i></a>
                    <a href="https://www.linkedin.com/in/danique-montanus-6b60b0130/" className='social-icon'><i className="fab fa-linkedin"></i></a>
                    <a href="mailto:danique.montanus@gmail.com" className='social-icon'><i className="fas fa-at"></i></a>
                </div>
            </section>
        )
    }
}

export default Socials
