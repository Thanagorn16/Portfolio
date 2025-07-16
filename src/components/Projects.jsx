import './Projects.css'
import {useState} from 'react'
import { Element } from 'react-scroll';

function Projects() {
    const [hoverIndex, setHoverIndex] = useState(null);

    const projects = [
        {
            title: 'J-Travel - A Travel Booking Web App',
            description: 'A full-stack web application for booking travel packages.',
            responsibilities: [
                `Designed and implemented a REST API with NodeJs, Express, and 
                MongoDB to manage users, travel packages, and image metadata.`,
                `Configured a MongoDB replica set to ensure data durability and 
                safe multi-document transactions.`,
                `Integrated AWS S3 for scalable image storage; 
                implemented JWT authentication, 
                bcrypt password hashing, and 
                role-based control.`,
                `Developed unit and integration tests with Jest and Supertest.`,
                `Structured codebase for production deployment: Environment configs, 
                docker containerization, and centralized error handling).`
            ],
            url: 'https://github.com/Tnantaki/j_travel-react'
        },
        {
            title: 'Transcendence',
            description: 'Real-time multiplayer game and chat UI (42 Bangkok Project)',
            responsibilities: [
                `Developed the front-end game interface in vanilla JavaScript and 
                HTML5 Canvas for a real-time two-player Pong game`,
            `Collaborated with back-end teammates to integrate authentication flows 
                and session management`
            ],
            url: 'https://github.com/Thanagorn16/transcendence'
        },
    ];
    

    return (
        <Element name='projects'>
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <a key={index} href={project.url} 
                className={`project-item ${hoverIndex !== null && hoverIndex !== index ? 'fade' : ''}`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                target="_blank" rel="noopener noreferrer">
                    <div className='project-content'>
                        <h3 className='project-title'>{project.title}</h3>
                        <p className='project-description'>{project.description}</p>
                        <ul className='response-list'>
                            {project.responsibilities.map((resp, respIndex) => (
                                <li key={respIndex} className='response-item'>{resp}</li>
                            ))}
                        </ul>
                    </div>
                </a>
            ))}
        </Element>
    );
}

export default Projects