import { Fragment } from "react";

export default function ReferencesButtons() {
    return (
        <Fragment>
            <div className='references'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <a href={'https://www.linkedin.com/in/kristoffer-gregersen-65622320a/'} className={'reference'} target={'_blank'}>
                    <i className='fa fa-linkedin'></i>
                    <span>LinkedIn</span>
                </a>
                <a href={'https://github.com/Kristoffermg'} className={'reference'} target={'_blank'}>
                    <i className='fa fa-github'></i>
                    <span>GitHub</span>
                </a>
                <a href={'mailto:kristoffermollergregersen@gmail.com'} className={'reference'}>
                    <i className='fa fa-envelope'></i>
                    <span>Email</span>
                </a>
                <a href={'https://emerald-ursulina-3.tiiny.site/'} className={'reference'} target='_blank'>
                    <i className='fa fa-newspaper-o'></i>
                    <span>CV</span>
                </a>
            </div>
        </Fragment>
    )
}