import React from 'react';
import style from './../../assets/css-modules/Addnote.module.css'

function AddNoteCard({onClose}) {
    return (
        <div className={style.notecard} tabIndex="0">
            <div className={style.close}>
                <button onClick={onClose}><i className='ri-close-line'></i></button>
            </div>
            <div className={style.inputarea}>
                <input 
                    type="text"
                    placeholder="Title"
                    onChange={(e) => console.log(e.target.value)}
                />
                <textarea 
                    className={style.textarea}
                    placeholder="Note something down..." 
                    
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>
            <div className={style.add}>
            <button>Cancel</button>
            <button>Save</button>
            </div>
        </div>
    )
}

export default AddNoteCard;