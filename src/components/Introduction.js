import React, { Component } from 'react'
import introductionPhoto from '../images/daniqueMontanus.jpg'

export class Introduction extends Component {
    render() {
        return (
            <article className='introduction'>
                <section className='introduction-box'>
                    <section className="introduction-text">
                    <div className='section-name'>
                        <h2 className="header-section-number">00. Introductie</h2>
                    </div>
                    <div className="introduction-paragraph">
                        <h1 className='header-main'>Danique Montanus</h1>
                        <h3 className='header-third'>Informatica Student / Junior Web Developer</h3>
                        <span className="divider-line"> </span>
                        <p className="paragraph">
                            Danique is een vierde jaars Informatica student die zich specialiseert in Interactie Technologie! 
                        </p>
                    </div>
                    </section>
                    <div className="picture-group">
                        <img src={introductionPhoto} className='introduction-picture' alt="Foto van Danique Montanus"></img>
                    </div>
                </section>
            </article>
        )
    }
}

export default Introduction
