import {useEffect} from 'react';
import './Spotlight.css';

export default function Sportlight() {
    useEffect(() => {
        const updateMousePosition = (e) => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, [])

    return <div className='spotlight'/>;
}