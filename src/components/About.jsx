import './About.css'
import { Element } from 'react-scroll';

function About() {
    const skills = [
        {
            category: 'Computer languages',
            items: 'C, C++, Python, Javascript'
        },
        {
            category: 'Back end',
            items: 'Node.js, Express, Mongoose/MongoDB, REST API design'
        },
        {
            category: 'Front end',
            items: 'HTML, CSS, vanilla JavaScript'
        },
        {
            category: 'Other tools',
            items: 'GitHub, AWS S3, Docker (basic)'
        }
    ];

    return (
        <Element className='about-container' name='about'>
            <p className='about-text'>
                I am an aspiring full stack developer recently graduated from 42 Bangkok,
                a programming school associated with KMITL, with hands-on experience building a web application. 
                I am interested in being considered for a junior backend or full-stack role.
            </p>
            <h2 className='skill'>Skill & Proficiencies</h2>
            <ul className='skill-list'>
                {skills.map((skill, index) => (
                    <li className='skill-item' key={index}>
                        <strong>{skill.category}:</strong> {skill.items}
                    </li>
                ))}
            </ul>
        </Element>
    )
}

export default About;