// const Demo = () => {
// const handleClick = () => {
// console.log('BS');
// }

// return(
// <button onClick = {handleClick}> Click me </button>
// );
// }

// export default Demo

import React, {useState} from 'react';

const Demo = () => { 

const [count, setCount] = useState( () => [
    4 
]  
);

function Increament() {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
}

const Decreament = () => {
    setCount(prev => prev - 1)
}

return(
    <>
        <button onClick = {Decreament}>-</button>
        <h1>{count}</h1>
        <button onClick = {Increament}>+</button>    
    </>
);
}

export default Demo