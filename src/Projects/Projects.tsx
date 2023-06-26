import './styles.css'
import husdatabillede from '../images/husdata_billede.png'
import transformerbillede from '../images/transformer-hjemmeside.png'

export default function Projects() {
    return (
        <section className='projects'>
            <h1>My projects</h1>
            <div id='kristofferhusdata' className='projectListings'>
                <div className='pictureAndTechnologies'>
                    <h2>Kristofferhusdata</h2>
                    <img src={husdatabillede}></img>
                    <h4>Technologies used</h4>
                    <ul>
                        <li><i className='fa fa-star'></i> C# .NET</li>
                        <li><i className='fa fa-star'></i> Blazor</li>
                        <li><i className='fa fa-star'></i> Python</li>
                        <li><i className='fa fa-star'></i> SQL</li>
                        <li><i className='fa fa-star'></i> Azure</li>
                        <li><i className='fa fa-star'></i> Raspberry Pi & Adafruit DHT22 sensor</li>
                    </ul>
                </div>
                <div className='projectInformation'>
                    <h4>What does this project solve?</h4>
                    <p>I wanted a way to monitor the temperature and air humidity in my room. With the gathered data, I can monitor how big of an effect the surrounding conditions have on the readings, 
                    and ultimately find a way to avoid unpleasant temperatures and air humidity in my room.</p>
                    <p></p>
                    <h4>My role</h4>
                    <p>This is a personal project that I have been working on in my free-time by myself. This taught me how to independently work on a project as a fullstack developer.</p>
                    <h4>What I learned</h4>
                    <p>This project taught me many things. I learned how to work with Blazor, how to use a DHT22 sensor with my Raspberry Pi and how to display nice and interactive graphs in Blazor.
                    I also learned how to use Azure to host and manage websites and databases. My learning experience from this project ultimately taught me a lot of useful things that I could apply in my Bachelors project.</p>
                </div>
            </div>
            <hr />
            <div id='bachelorprojekt' className='projectListings'>
                <h2>Bachelor project: Time-series forecasting for transformers</h2>
                <img src={transformerbillede}></img>
                <h4>Technologies used</h4>
                    <ul>
                        <li><i className='fa fa-star'></i> C# .NET</li>
                        <li><i className='fa fa-star'></i> Blazor</li>
                        <li><i className='fa fa-star'></i> Python</li>
                        <li><i className='fa fa-star'></i> SQL</li>
                        <li><i className='fa fa-star'></i> Azure</li>
                        <li><i className='fa fa-star'></i> Raspberry Pi & Adafruit DHT22 sensor</li>
                    </ul>
                </div>
                <div className='projectInformation'>
                    <h4>What does this project solve?</h4>
                    <p>I wanted a way to monitor the temperature and air humidity in my room. With the gathered data, I can monitor how big of an effect the surrounding conditions have on the readings, 
                    and ultimately find a way to avoid unpleasant temperatures and air humidity in my room.</p>
                    <p></p>
                    <h4>My role</h4>
                    <p>This is a personal project that I have been working on in my free-time by myself. This taught me how to independently work on a project as a fullstack developer.</p>
                    <h4>What I learned</h4>
                    <p>This project taught me many things. I learned how to work with Blazor, how to use a DHT22 sensor with my Raspberry Pi and how to display nice and interactive graphs in Blazor.
                    I also learned how to use Azure to host and manage websites and databases. My learning experience from this project ultimately taught me a lot of useful things that I could apply in my Bachelors project.</p>
                </div>
        </section>
    )
}