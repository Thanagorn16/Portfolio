import './Header.css'
import { Link } from 'react-scroll';

function Header() {
    const navLinks = [
        {href: '#about', label: 'About'},
        {href: '#education', label: 'Education'},
        {href: '#projects', label: 'Projects'}
    ];

    return (
        <header className='port-header'>
            <h1>Thanagorn Ruangsit</h1>
            <h2 className='job-title'>Developer</h2>
            <p className='short-desc'>This is my portfolio web page. <br />
                Here, you can see the details of my projects and contact information.
            </p>

            <nav className='nav-container'>
                <ul className="nav-list">
                    {navLinks.map((link, index) => (
                        <li className='nav-items' key={index}>  
                            <a href={link.href} className='nav-link'>
                                <span className='nav-indicator'></span>
                                <span className='nav-text'>{link.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header 