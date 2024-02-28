import {useState} from 'react';

const Home = () => {
    const [name, setName] = useState('dojo');
    const handleClick = () => {
        setName ('hybrid');
    }

    return(
        <div className='home'>
            <p> {name} </p>
            <button onClick = {handleClick}> Click Me </button>
        </div>
    );
}

export default Home;