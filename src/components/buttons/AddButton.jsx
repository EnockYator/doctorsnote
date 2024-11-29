import React, { useCallback, useState } from 'react';
import style from './../../assets/css-modules/Addbutton.module.css'
import AddNoteCard from '../AddCards/AddNoteCard';
import AddTodoCard from '../AddCards/AddTodoCard';

function AddButton({onClick}) {
    return (
        <button onClick={onClick} className={style.addbutton}>Add</button>
    )
}

export default AddButton;