import React, { useState } from 'react';

const Todo2 = () => {
    const [task, setTask] = useState([]);
    const [input, setInput] = useState("");
    const [updated, setUpdated] = useState([]);

    const addTask = () => {
        if(input.trim() === "") return;
        setTask([...task, input]);
        setInput("");
    };
    
    const handleDelete = (i) => {
        setTask(task.filter((j) => j !== i));
    };
    
    const handleEdit = (i) => {
        setTask(task.filter((j) => j !== i));
        setInput(i);
    };

    const handleDone = (i) => {
        const deleted = task.filter(j => j === i);
        setTask(task.filter((j) => j !== i));
        setUpdated([...updated, deleted[0]]);
    };

    return(
        <div>
            <h1> Todo </h1>
            <div className="content">
                <input 
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder='Enter the text' />
                <button onClick={addTask}>+</button>
            <div>
                {task.map((i) => (
                    <p>
                    <button onClick={() => handleDone(i)}>✅</button>
                    {i}<button onClick={() => handleDelete(i)}>❌</button>
                    <button onClick={() => handleEdit(i)}>🖌</button>
                    </p>
                ))}
            </div>
            <div>
                <p>Updated Tasks: {updated.map((task, index) => <span key={index}>{task} </span>)}</p>
            </div>
            </div>
        </div>
    );
}

export default Todo2;