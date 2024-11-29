import React from 'react';
import style from './../../assets/css-modules/Navigation.module.css'

function Navigation({activeSection, setActiveSection}) {
    return(
        <nav className={style.menu}>
                <button onClick={() => setActiveSection('notes')}
                className={activeSection === 'notes' ? style['button-active'] : ''}>
                    <i className='ri-sticky-note-line'><span>Notes</span></i>
                </button>
                <button onClick={() => setActiveSection('todos')}
                className={activeSection ==='todos' ? style['button-active'] : ''}>
                    <i className='ri-task-line'><span>To-do</span></i>
                </button>
            </nav>
    )
}

export default Navigation;