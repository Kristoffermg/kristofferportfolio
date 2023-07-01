import React, { Fragment } from 'react';
import './styles.css';
import ReferencesButtons from '../ReferencesButtons';
import Contact from '../Contact';
import About from '../About/About';
import Projects from '../Projects/Projects';
import BackgroundImage from './forside_baggrund.png';

export default function Home() {
    return (
        <Fragment>
            <section className={'header'}>
                <div className={'container'}>
                    <div className='title'>
                        <h1>Fullstack Software Developer</h1>
                        <h2 id='location'><i className='fa fa-map-marker'/> Aalborg</h2>
                    </div>
                    <ReferencesButtons />
                </div>
            </section>
            <About />
            <Projects />
        </Fragment>
       )
}