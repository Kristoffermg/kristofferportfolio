import './styles.css'
import husdatabillede from '../../images/husdata_billede.png'
import transformerbillede from '../../images/transformer-hjemmeside.png'
import portfoliobillede from '../../images/portfolio.png'
import { Fade } from "react-awesome-reveal";

export default function Projects() {
    return (
        <section id='projects' className='projects'>
            <Fade>
                <h1 id='myprojects'>My projects</h1>
                <div id='kristofferhusdata' className='projectListings'>
                    <div className='projectInformation'>
                        <img src={husdatabillede}></img>
                        <h2>Kristofferhusdata</h2>
                        <h3>Technologies used</h3>
                        
                        <ol>
                            <li className="">C# .NET</li>
                            <li className="">Python</li>
                            <li className="">SQL</li>
                            <li className="">Blazor</li>
                            <li className="">Azure</li>
                            <li className="">Raspberry Pi</li>
                            <li className="">Adafruit DHT22 sensor</li>
                        </ol>
                        
                        <div className='projectText'>
                            <h3>What does this project solve?</h3>
                            <p>I wanted a way to monitor the temperature and air humidity in my room. With the gathered data, I can monitor how big of an effect the surrounding conditions have on the readings, 
                            and ultimately find a way to avoid unpleasant temperatures and air humidity in my room.</p>
                            <p></p>
                            <h3>My role</h3>
                            <p>This is a project that I have been working on in my free time by myself. This taught me how to independently work on a project as a fullstack developer.</p>
                            <h3>What I learned</h3>
                            <p>This project taught me many things. I learned how to work with Blazor, how to use a DHT22 sensor with my Raspberry Pi and how to display nice and interactive graphs in Blazor.
                            I also learned how to use Azure to host and manage websites and databases. My learning experience from this project ultimately taught me a lot about useful technologies that I could apply in my Bachelors project.</p>
                            <a href={'https://kristofferhusdata.azurewebsites.net'} target='_blank'><h4>Link to website (username: guest, password: 123)</h4></a>
                        </div>
                    </div>
                </div>
            </Fade>
            <hr />
            <Fade>
                <div id='bachelorprojekt' className='projectListings'>
                    <div className='projectInformation'>
                            <img src={transformerbillede}></img>
                            <h2>Bachelor project: Time-Series Forecasting for Predicting the Oil Temperature in Electrical Transformers (Grade: 10)</h2>

                            <h3>Technologies used</h3>
                            <ol>
                                <li className="">C# .NET</li>
                                <li className="">Python</li>
                                <li className="">SQL</li>
                                <li className="">JSON</li>
                                <li className="">Blazor (Mudblazor for UI)</li>
                                <li className="">Azure</li>
                                <li className="">Sklearn</li>
                                <li className="">Pytorch</li>
                            </ol>
                            
                            <div className='projectText'>
                                <h3>What does this project solve?</h3>
                                <p>Over time, higher oil temperatures in electrical transformers break down the transformer at a significant rate. In this project, we made a platform that makes the predictions
                                    on the oil temperature easily accessible. We trained a linear model with Sklearn to perform time-series forecasting. We also trained a multilayer perceptron with PyTorch to calculate the oil temperature given
                                    a set of load values. We programmed these models in Python. We connected the models to a front-end interface in C# with Blazor, which was specifically designed with MudBlazor. 
                                    We also used ChartJs.Blazor to make interactive graphs that displays the predictions. To communicate between the front-end and back-end we used a MySQL database which we hosted on Azure, and we also made good use of
                                    JSON files. 
                                </p>
                                <p></p>
                                <h3>My role</h3>
                                <p>In this project I came up with the requirements for the project and which technologies we should use. I gave out tasks to the other group members so we all had ways to contribute to the project.
                                    I made the linear model which makes the time-series forecasts. I set up and designed the database, and made the SQL queries which are used to communicate between the front-end and back-end. 
                                    I helped on the front-end by adding the interactive graphs. Throughout the project, I helped the other group members with various things, both front-end and back-end, if they were stuck.
                                     In general, I worked as a fullstack developer, where I primarily worked on the back-end.</p>
                                <h3>What I learned</h3>
                                <p>In this project, I got a lot better at using machine learning models in practice. I also furtherer developed my skills as a fullstack developer in terms of ways to communicate between the 
                                    front-end and back-end portions of a project. My skills with managing a project also grew, predominantly on how to solve issues with group decisions so that the progression never halts.</p>
                                <a href='https://docdro.id/0yJjytH' target='_blank'><h4>Link to the paper</h4></a>
                            </div>
                        </div>
                </div>
            </Fade>
            <hr />
            <Fade>
                <div id='portfolio' className='projectListings'>
                    <div className='projectInformation'>
                            <img src={portfoliobillede}></img>
                            <h2>Personal portfolio</h2>

                            <h3>Technologies used</h3>
                            <ol>
                                <li className="">React</li>
                                <li className="">TypeScript</li>
                            </ol>

                            <h3>What I learned</h3>
                            <p>Making this portfolio taught me more about designing front-end applications. </p>
                        </div>
                </div>
            </Fade>
        </section>
    )
}