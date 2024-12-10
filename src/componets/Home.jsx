import { Link, useNavigate } from 'react-router-dom';
import './Home.css'
import { useState } from 'react';

const Home  = () => {
    const [size, setSize] = useState('4');
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/game', {state : {size}});
    }

    const handleSelect = (e) => {
        setSize(e.target.value)
    }

    return (
        <div className="Container"> 
            <div className='title'>
            <span className='span1'> MemoTest(taylor's version) </span>
            </div>
            <div className='containerSelect'> 
                <span className='span'> Seleccione un tamaño </span>
                <select className='select' onChange={handleSelect}>
                    <option value='4'>4x4</option>
                    <option value='6'>6x6</option>
                    <option value='8'>8x8</option>
                </select>
            </div>
             <button className="buttonStart" onClick={handleNavigate}> Inciar partida </button>
        </div>
    )
}
export default Home;