import React from 'react';
import styles from './Home.module.css';
import Project from './Project/Project';
import TechSkills from './TechSkills/TechSkills';

const Home = () => {
    return (
        <div>
            <TechSkills />
            <h4 className={styles.portfolioTitle}>Portfolio</h4>
            <div className={styles.portfolioContainer}>
                <Project 
                img="https://i.ibb.co/JsTMYtj/range.jpg" 
                name="custom math and arrays library" 
                description='Utilized algorithm knowledge to create a custom "intuitive" math library that increases developer productivity and decreases repetitive tasks.'
                description2="Implemented vanilla JavaScript with zero dependencies to create an effecient lightweight library"/>
                <Project 
                img="https://i.ibb.co/fxKjd7b/quiz.jpg" 
                name="quiz creator / randomizer"
                description="Developed a custom, dynamic single-page application for teachers to create and randomize quizzes."
                description2="Utilized React Router to decrease server calls and improve user experience."/>
                <Project 
                img="https://i.ibb.co/W2fNxMc/formal.jpg" 
                name="custom forms library"
                description='Implemented React using "DRY" principals to develop a user friendly "fun" forms library'
                description2='Utilized resuabled components and props to keep codebase clean'/>
                <Project 
                img="https://i.ibb.co/SN120M3/calc2.jpg" 
                name="react calculator"
                description='Implemented data structure knowledge to store and access digit grid and quotes data'
                description2='Applied css grid and appropriate color choices in design to create a better UI/UX' />
                <Project 
                img="https://i.ibb.co/82HTMmy/string.jpg" 
                name="custom strings library"
                description='Applied regular expression knowledge to build a library that creates a better "developer experience" with strings'/>
            </div>
        </div>

    )
}

export default Home;