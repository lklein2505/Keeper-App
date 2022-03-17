import React, { useState } from "react";

function AddNote(props) {
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNewNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function handleClick(event) {
        props.onAdd(newNote);
        setNewNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>           
                <input onChange={handleChange} name="title" placeholder="Title" value={newNote.title}/>
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." value={newNote.content} rows="3"/>
                <button onClick={handleClick}>Add</button>
            </form>

        </div>
    );
}

export default AddNote;