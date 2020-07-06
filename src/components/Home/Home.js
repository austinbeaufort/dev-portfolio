import React from 'react';
import styles from './Home.module.css';
import Project from './Project/Project';
import TechSkills from './TechSkills/TechSkills';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar title="Contact"/>
            <TechSkills />
            <h4 className={styles.portfolioTitle}>Professional Work Experience</h4>
            <div className={styles.workExperience}>
                <h5><strong>Software Developer - Sesco LLC, Greensburg, PA</strong></h5>
                <hr></hr>
                <p><strong>Microservices (For Power Grid Data)</strong> - <i>NodeJS, GraphQL, Redis, InfluxDB</i></p>
                <ul>
                    <li>Utilized a time series database (InfluxDB), for data storage and persistence.  </li>
                    <li>Using Mocha, Chai, and Sinon, created hundreds of unit tests covering greater than 90% of the code.</li>
                    <li>Integrated Redis as a caching layer in the service to increase speed of data calls when possible.</li>
                    <li>Created a graphql endpoint, accepts post requests as JSON data to feed into the service.</li>
                </ul>
                <p><strong>Job Engine</strong> - <i>Haskell</i></p>
                <ul>
                    <li>Developed an application that fetches XML Data, converts it to JSON, 
                    <br></br>
                    and sends the JSON as a post request to the appropriate microservice where the data will be cached and stored. </li>
                </ul>
                <p><strong>Company Ticketing System</strong> - <i>JavaScript, SharePoint, Microsoft Access</i></p>
                <ul>
                    <li>Utilized JavaScript to add features to the scoring system for prioritizing tickets</li>
                    <li>Updated and formatted comment section of the ticketing system for better readability.</li>
                    <li>Accessed SharePoint lists through Microsoft Access.</li>
                </ul>
                <p><strong>Team Experience</strong></p>
                <ul>
                    <li>Taught a class on hooking up express, graphql, influx, and redis for local builds.</li>
                    <li>Weekly standup meetings.</li>
                    <li>Familiar with using a ticketing system.</li>
                </ul>
            </div>
            <h4 className={styles.portfolioTitle}>Personal Project Portfolio</h4>
            <div className={styles.portfolioContainer}>
                <Project 
                    img="https://i.ibb.co/D1rkFsB/translation3.jpg" 
                    demo="https://austinbeaufort.github.io/translator/"
                    source="https://github.com/austinbeaufort/translator"
                    name="Voice to Voice Translator"
                    description='Integrated Web Speech API and Yandex API with JavaScript to create a free translation service.' />
                <Project 
                    img="https://i.ibb.co/GFnMKYs/microwave.jpg" 
                    demo="https://austinbeaufort.github.io/microwave/"
                    source="https://github.com/austinbeaufort/microwave"
                    name="Virtual Microwave"
                    description='Integrated OOP concepts and Encapsulation using Classes with Typescript to organize the app.'
                    description2='Bundled application with Parcel and deployed to github pages.'/>
                <Project 
                    img="https://i.ibb.co/mRJkFf4/rsz-gofish.jpg" 
                    demo="https://austinbeaufort.github.io/go-fish/"
                    source="https://github.com/austinbeaufort/go-fish"
                    name="Go Fish Card Game"
                    description='Created a custom npm library to use as the base Class for this card game https://www.npmjs.com/package/classic-deck'
                    description2='Implemented JavaScript modules to structure code and bundled the modules with Parcel.'/>
                <Project 
                    img="https://i.ibb.co/fxKjd7b/quiz.jpg" 
                    demo="https://austinbeaufort.github.io/quiz-shuffler/#/"
                    source="https://github.com/austinbeaufort/quiz-shuffler"
                    name="Quiz Creator / Randomizer"
                    description="Developed a custom, dynamic single-page application for teachers to create and randomize quizzes."
                    description2="Utilized React Router to decrease server calls and improve user experience."/>
                <Project 
                    img="https://i.ibb.co/W2fNxMc/formal.jpg" 
                    demo="https://austinbeaufort.github.io/formal-site/"
                    source="https://github.com/austinbeaufort/formal-site"
                    name="Custom Forms Library"
                    description='Implemented React using "DRY" principles to develop a user friendly forms library'
                    description2='Utilized resuabled components and props to keep codebase clean'/>
                <Project 
                    img="https://i.ibb.co/61HYYfM/rsz-arduino.jpg" 
                    demo="https://www.youtube.com/watch?v=qW54L7L4NZg&t"
                    source="https://github.com/austinbeaufort/iot-arduino-phone-websockets"
                    name="IOT Microcontroller Project"
                    description='Integrated Web Sockets for continuous communication between phone (the app) and arduino.'
                    description2='Utilized Express / NodeJS to create a server and serve up the webpage.'/>
            </div>
        </div>

    )
}

export default Home;