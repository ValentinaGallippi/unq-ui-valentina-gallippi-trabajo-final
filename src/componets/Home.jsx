import { Link } from 'react-router-dom';
import './Home.css'

const Home  = () => {
    return (
        <div className="Container"> 
            <Link className='link' to='/game'>
                <button className="buttonStart"> Inciar partida </button>
            </Link>
        </div>
    )
}
export default Home;