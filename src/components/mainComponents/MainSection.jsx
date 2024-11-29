import React, { lazy, Suspense, useState, useCallback } from 'react';
import AddButton from '../buttons/AddButton';
import style from './../../assets/css-modules/Mainsection.module.css';
const AddNoteCard = lazy(() => import('./../AddCards/AddNoteCard'));
const AddTodoCard = lazy(() => import('./../AddCards/AddTodoCard'));


function MainSection({activeSection, notes, todos}) {
    const [editItem, setEditItem] = useState('');
    const [showCard, setShowCard] = useState(false);
    const date = new Date();
    const [timeOfCreation, setTimeOfCreation] = useState(date.toLocaleString());
    
    const handleOpen = useCallback(() =>{
        setShowCard(true);
        setEditItem(activeSection);
    }, [activeSection]);

    const handleClose = useCallback(() => {
        setShowCard(false);
        setEditItem('')
    }, [activeSection])

    return (
        <div className={style.mainsection}>
            <div className={style.active}>
                {
                    activeSection === 'notes'  && !editItem && (
                        <>
                        {
                            notes.length === 0 ? 
                            <div>
                                <p>Your notes will appear here.</p>
                                <AddButton onClick={handleOpen}/>
                            </div> :
                            <>
                            <div className={style.search}>
                                <input 
                                    className={style.searchbox}
                                    type="text"
                                    placeholder='Search Note'
                                />
                            </div>
                            <div className={style.notes}>
                                {
                                    notes.map((note, index) => (
                                    <li key={index} className={style.note}>
                                        <p className={style.title}>{note.title}</p>
                                        <p className={style.time}>{timeOfCreation}</p>
                                    </li>
                                    ))
                                }
                                <AddButton onClick={handleOpen} />
                             </div>
                            </>
                            
                        }
                        </>
                    )
                }
                {    
                    activeSection === 'todos' && !editItem && (
                        <>
                        {
                            todos.length === 0 ?
                            <div>
                                <p>Your todos will appear here.</p>
                                <AddButton onClick={handleOpen} />
                            </div> :
                            <>
                            <div className={style.search}>
                                <input 
                                    className={style.searchbox}
                                    type="text"
                                    placeholder='Search Todo'
                                />
                            </div>
                            <div className={style.todos}>
                                {
                                    todos.map((todo, index) => (
                                    <li key={index} className={style.todo}>
                                        <p className={style.title}>{todo.title}</p>
                                        <p className={style.time}>{timeOfCreation}</p>
                                    </li>
                                    ))
                                }
                                <AddButton onClick={handleOpen} />
                            </div>
                            </>
                        }
                        </>
                    )
                }
                {
                    showCard && (
                        activeSection === 'notes'? 
                        <Suspense fallback={<div>Loading...</div>}>
                            <AddNoteCard onClose={handleClose}/>
                        </Suspense> :
                        <Suspense fallback={<div>Loading...</div>}>
                            <AddTodoCard onClose={handleClose}/>
                        </Suspense>
                    )
                }

            </div>
            
           

        </div>
    )
}

export default MainSection;