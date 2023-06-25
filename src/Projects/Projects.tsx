import './styles.css'
import husdatabillede from '../images/husdata_billede.png'

export default function Projects() {
    return (
        <section className='projects'>
            <div id='kristofferhusdata'>
                <img src={husdatabillede}></img>
            </div>
        </section>
    )
}