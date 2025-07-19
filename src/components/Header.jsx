import './Header.css';
import Icon from '../components/Icon.jsx';
import { Link } from 'react-scroll';

function Header() {
    const navLinks = [
        {to: 'about', label: 'About'},
        {to: 'education', label: 'Education'},
        {to: 'projects', label: 'Projects'}
    ];

    return (
        <header className='port-header'>
            <div className='header-inner'>
                <div className='header-top'>
                    <h1>Thanagorn Ruangsit</h1> <h2 className='job-title'>Developer</h2>
                    <p className='short-desc'>This is my portfolio web page. <br />
                        Here, you can see the details of my projects, skills, and education.
                    </p>

                    <nav className='nav-container'>
                        <ul className="nav-list">
                            {navLinks.map((link, index) => (
                                <li className='nav-items' key={index}>  
                                    <Link 
                                            to={link.to} 
                                            className='nav-link'
                                            smooth={true} 
                                            duration={500} 
                                            offset={-window.innerHeight / 2 + 200}
                                            spy={true}
                                            activeClass='active'
                                    >
                                        <span className='nav-indicator'></span>
                                        <span className='nav-text'>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>

                <div className='header-bottom'>
                    <Icon/>
                </div>
            </div>
        </header>
    )
}

export default Header 