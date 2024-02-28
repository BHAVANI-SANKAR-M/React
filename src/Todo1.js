import React, {useState} from 'react';
import './App.css';

const Todo1 = () => {
    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState('');

    const addNotes = () => {
        setNotes([...notes, input]);
        setInput('');
    };
    
    const handleDelete = (i) => {
        setNotes(notes.filter((j) => j!==i));
    };
    
    const handleEdit = (i) => {
        setNotes(notes.filter((j) => j!==i));
        setInput(i);
    };

    const handleDone = (i) => {
        // setNotes(notes.filter((j) => j!==i));
        const update = notes.filter((j) => j!==i);
        setNotes([...update, i]);
    };
    
    return(
        <div className="todo">
            <h1> TODO </h1>
            <div className="content">
                <input
                value = {input}
                onChange = {(event) => setInput(event.target.value)}
                placeholder="Enter the text"/>
                <button onClick={addNotes}>Add</button>
            </div>
            <div>
                {notes.map((i) => (
                    <p>
                        {i}
                        <button onClick={() => handleDelete(i)}>❌</button>
                        <button onClick={() => handleEdit(i)}> Edit </button>
                        <button onClick={() => handleDone(i)}>✅</button>
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Todo1;