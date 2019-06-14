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
            <h4 className={styles.portfolioTitle}>Portfolio</h4>
            <div className={styles.portfolioContainer}>
                <Project 
                    img="https://i.ibb.co/D1rkFsB/translation3.jpg" 
                    demo="https://austinbeaufort.github.io/translator/"
                    source="https://github.com/austinbeaufort/translator"
                    name="Voice to Voice Translator"
                    description='Integrated Web Speech API and Yandex API with JavaScript to create a free translation service.' />
                <Project 
                    img="https://i.ibb.co/fxKjd7b/quiz.jpg" 
                    demo="https://austinbeaufort.github.io/quiz-shuffler/#/"
                    source="https://github.com/austinbeaufort/quiz-shuffler"
                    name="quiz creator / randomizer"
                    description="Developed a custom, dynamic single-page application for teachers to create and randomize quizzes."
                    description2="Utilized React Router to decrease server calls and improve user experience."/>
                <Project 
                    img="https://i.ibb.co/JsTMYtj/range.jpg" 
                    demo="https://www.npmjs.com/package/home-on-the-range"
                    source="https://github.com/austinbeaufort/home-on-the-range"
                    name="custom math and arrays library" 
                    description='Utilized algorithm knowledge to create a custom "intuitive" math library that increases developer productivity and decreases repetitive tasks.'
                    description2="Implemented vanilla JavaScript with zero dependencies to create an effecient lightweight library"/>
                <Project 
                    img="https://i.ibb.co/W2fNxMc/formal.jpg" 
                    demo="https://austinbeaufort.github.io/formal-site/"
                    source="https://github.com/austinbeaufort/formal-site"
                    name="custom forms library"
                    description='Implemented React using "DRY" principles to develop a user friendly forms library'
                    description2='Utilized resuabled components and props to keep codebase clean'/>
                <Project 
                    img="https://i.ibb.co/SN120M3/calc2.jpg" 
                    demo="https://austinbeaufort.github.io/react-calculator-fcc/"
                    source="https://github.com/austinbeaufort/react-calculator-fcc"
                    name="react calculator"
                    description='Implemented data structure knowledge to store and access digit grid and quotes data'
                    description2='Applied css grid and appropriate color choices in design to create a better UI/UX' />
                <Project 
                    img="https://i.ibb.co/GcMfSnL/diceapp.jpg" 
                    demo="https://austinbeaufort.github.io/custom-dice/"
                    source="https://github.com/austinbeaufort/custom-dice"
                    name="Dice App"
                    description='Utilized OOP in JavaScript with Classes and split the code into reusable modules when possible.'/>
                <Project 
                    img="https://i.ibb.co/82HTMmy/string.jpg" 
                    demo="https://www.npmjs.com/package/string-of-pearls"
                    source="https://github.com/austinbeaufort/string-of-pearls"
                    name="custom strings library"
                    description='Applied regular expression knowledge to build a library that creates a better "developer experience" with strings'/>
            </div>
        </div>

    )
}

export default Home;