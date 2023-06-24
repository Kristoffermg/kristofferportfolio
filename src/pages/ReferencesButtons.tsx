import { Fragment } from "react";

export default function ReferencesButtons() {
    return (
        <Fragment>
            <a href={'google.com'} className={'reference'}>
                <i className='fab fa-linkedin-in'></i>
                <span>LinkedIn</span>
            </a>
            <a href={'google.com'} className={'reference'}>
                <i className='fab fa-github'></i>
                <span>GitHub</span>
            </a>
            <a href={'google.com'} className={'reference'}>
                <i className='email'></i>
                <span>Email</span>
            </a>
            <a href={'google.com'} className={'reference'}>
                <i className='resume'></i>
                <span>Resume</span>
            </a>
        </Fragment>
    )
}