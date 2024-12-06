import { Link } from 'react-router-dom';
import './GamePage.css'

const GamePage = () => {
    return (
        <div>
            <text> jueguito </text>
            <Link to='/finish'> 
                <button> ponele q termino </button>
            </Link>
        </div>
    )
}

export default GamePage;