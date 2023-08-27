import React, { Fragment } from 'react';
import './styles.css';
import ReferencesButtons from '../ReferencesButtons';
import About from '../About/About';
import Experiences from '../Experiences/Experiences'
import Projects from '../Projects/Projects';

const Flip = require('react-reveal/Flip');
const Fade = require('react-reveal/Fade');

export default function Home() {
    return (
        <Fragment>
            <section className={'header'}>
                <Flip bottom>
                    <div className={'container'}>
                        <div className='title'>
                            <h1>Fullstack Software Developer</h1>
                            <h2 id='location'><i className='fa fa-map-marker'/> Aalborg</h2>
                        </div>
                        <ReferencesButtons />
                    </div>
                </Flip>
            </section>
            <section className={'information'}>
                <Fade>
                    <About />
                    <Experiences />
                </Fade>
                <Projects />
            </section>
        </Fragment>
       )
}