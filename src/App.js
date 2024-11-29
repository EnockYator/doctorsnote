import React, { useCallback, useState } from 'react';
import Header from './components/mainComponents/Header';
import MainSection from './components/mainComponents/MainSection';
import SideBar from './components/mainComponents/SideBar';
import style from './assets/css-modules/Layout.module.css'

function App() {
    const [activeSection, setActiveSection] = useState('notes');
    const [notes, setNotes] = useState([{title: 'Note1'}, {title: 'Note2'}, {title: 'Note3'},
        {title: 'Note4'}, {title: 'Note5'}, {title: 'Note6'}, {title: 'Note7'}, {title: 'Note8'},
        {title: 'Note9'}, {title: 'Note10'}, {title: 'Note11'}, {title: 'Note12'}, {title: 'Note13'},
        {title: 'Note14'}, {title: 'Note15'}, {title: 'Note16'}, {title: 'Note17'}, {title: 'Note18'},
        {title: 'Note19'}, {title: 'Note20'}, {title: 'Note21'}, {title: 'Note22'}, {title: 'Note'},
        {title: 'Note23'}, {title: 'Note24'}, {title: 'Note25'}, {title: 'Note26'}, {title: 'Note27'},
        
    ]);
    const [todos, setTodos] = useState([{title: 'Todo1'}, {title: 'Todo2'}, {title: 'Todo3'},
        {title: 'Todo4'}, {title: 'Todo5'}, {title: 'Todo6'}, {title: 'Todo7'}, {title: 'Todo8'},
        {title: 'Todo9'}, {title: 'Todo10'}, {title: 'Todo11'}, {title: 'Todo12'}, {title: 'Todo13'},
        {title: 'Todo14'}, {title: 'Todo15'}, {title: 'Todo16'}, {title: 'Todo17'}, {title: 'Todo18'},
        {title: 'Todo19'}, {title: 'Todo20'}, {title: 'Todo21'}, {title: 'Todo22'}, {title: 'Todo23'},
        {title: 'Todo23'}, {title: 'Todo24'}, {title: 'Todo25'}, {title: 'Todo26'}, {title: 'Todo27'}]);
    
    const addNotes = useCallback(() => {
        setNotes(prevNotes => [...prevNotes, ...newNotes])
    }, []);

    const addTodos = useCallback(() => {
        setNotes(prevTodos => [...prevTodos, ...newTodos])
    }, []);
    
    return (
        <div className={style.app}>
            <div className={style.header}>
                <Header activeSection={activeSection} setActiveSection={setActiveSection} />
            </div>
            <div className={style.main}>
                <SideBar activeSection={activeSection} />
                <MainSection activeSection={activeSection} notes={notes} todos={todos}/>
            </div>
        </div>
    )
}

export default App;