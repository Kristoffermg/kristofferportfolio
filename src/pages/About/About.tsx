import './styles.css'
import { Fade } from "react-awesome-reveal";

export default function About() {
    return <section id='aboutme' className='aboutme'>
        <Fade>
            <h1 id='abouttext'>About</h1>
            <p>I am a fullstack developer who enjoys learning about new technologies. I have a bachelors degree 
                in Software Engineering at Aalborg University. After the summer I will start my masters in Software Engineering.
            </p>
        </Fade>
    </section>
}