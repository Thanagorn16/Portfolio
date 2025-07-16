import './Education.css';
import {Element} from 'react-scroll';

function Education() {
    const infos = [
        {
            school: '42 Bangkok - Peer-to-Peer Sowftware Engineering Proram',
            des: 'Graduated 2025 | Focused on C, C++, Shell, Git, teamwork',
            learned: `Peer-driven curriculum in C, C++, 
            Shell scripting, Git, full-stack web development and system architecture`
        },
        {
            school: 'Thammasat University – Bachelor of Laws (LL.B.)',
            des: 'Graduated 2022 | Focus on legal reasoning, research, and analysis',
            learned: `Developed research, analytical reasoning and 
            technical writing skills through legal case analyses and reports`
        },
    ];

    return (
        <Element>
            <h2 id='education'>Education</h2>
            {infos.map((info, index) => (
                <ul className='education-list' key={index}>
                    <li className='edication-item'>
                        <strong>{info.school}</strong>
                        <p className='edu-des'>{info.des}</p>
                        <p className='edu-skill'>{info.learned}</p>
                    </li>
                </ul>
            ))}
        </Element>
    )
}

export default Education;