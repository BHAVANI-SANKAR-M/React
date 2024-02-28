import React, {useState, useEffect} from 'react';

const Demo2 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('rendering...');

        let timerId;
        if (count){
            timerId = setInterval(() => {
            console.log('get price');
        }, 2000)
        }

    return() => {
        console.log('cleaning...');
        clearInterval(timerId);
    }

    }, [count]);

    return(
        <div>
            <p>Useffect goes here</p>
            <button onClick={() => setCount(count + 1)}> get price </button><span> count is {count}</span>
        </div>
    )
}

export default Demo2;