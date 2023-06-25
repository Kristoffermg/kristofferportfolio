import React, { Fragment } from 'react';
import './styles.css';
import ReferencesButtons from '../ReferencesButtons';
import Contact from '../Contact';
import About from '../About';
import Projects from '../../Projects/Projects';
import BackgroundImage from './forside_baggrund.png';

export default function Home() {
    return (
        <Fragment>
            <section className={'header'}>
                <div className={'container'}>
                    <ReferencesButtons />
                </div>
            </section>
            <Projects />
        </Fragment>
       )
}