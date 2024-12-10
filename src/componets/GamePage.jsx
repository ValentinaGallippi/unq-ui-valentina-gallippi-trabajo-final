import { useEffect, useState } from 'react';
import Board from './Board';
import './GamePage.css';
import { useLocation, useNavigate } from 'react-router-dom';
import imagen1 from '../assets/lover.png'
import imagen2 from '../assets/red.png'
import imagen3 from '../assets/speakNow-manos.png'
import imagen4 from '../assets/speakNow-violeta.png'
import imagen5 from '../assets/taylor record.png'
import imagen6 from '../assets/ttpd-blancojpg.png'
import imagen7 from '../assets/ttpd-gris.png'
import imagen8 from '../assets/ttpd.png'
import imagen9 from  '../assets/1.png'
import imagen10 from '../assets/2.png'
import imagen11 from '../assets/3.png'
import imagen12 from '../assets/4.png'
import imagen13 from '../assets/5.png'
import imagen14 from '../assets/6.png'
import imagen15 from '../assets/7.png'
import imagen16 from '../assets/8.png'
import imagen17 from '../assets/9.png'
import imagen18 from '../assets/10.png'
import imagen19 from '../assets/11.png'
import imagen20 from '../assets/12.png'
import imagen21 from '../assets/13.png'
import imagen22 from '../assets/14.png'
import imagen23 from '../assets/15.png'
import imagen24 from '../assets/16.png'
import imagen25 from '../assets/17.png'
import imagen26 from '../assets/18.png'
import imagen27 from '../assets/19.png'
import imagen28 from '../assets/20.png'
import imagen29 from '../assets/21.png'
import imagen30 from '../assets/22.png'
import imagen31 from '../assets/23.png'
import imagen32 from '../assets/24.png'

const  images = [imagen3
    ,imagen5,
    imagen1,
    imagen11,
    imagen23,
    imagen12,
    imagen14,
    imagen15,
    imagen6,
    imagen9,
    imagen29,
    imagen10,
    imagen16,
    imagen17,
    imagen18,
    imagen2,
    imagen19,
    imagen7,
    imagen20,
    imagen21,
    imagen22,
    imagen24,
    imagen25,
    imagen8,
    imagen26,
    imagen27,
    imagen13,
    imagen4,
    imagen28,
    imagen30,
    imagen31,
    imagen32]

const GamePage = () => {
    const [shuffledBlocks, setShuffledBlocks] = useState([]);
    const [selectedBlock, setselectedBlock] = useState(null);
    const [animating, setAnimating] = useState(false);
    const [isGameFinished, setIsGameFinished] = useState(false); 
    const navigate = useNavigate();
    const location = useLocation();
    const size = location.state;
    const [lastSize, setSize] = useState(size.size)

    useEffect(() => {
        const resizedImageList = images.slice(0, (size.size * size.size) / 2)
        const shuffledList = shuffleArray([...resizedImageList, ...resizedImageList]);
        setShuffledBlocks(shuffledList.map((image, i) => ({ index: i, image, flipped: false })));
    }, []);

    useEffect(() => {
        if (shuffledBlocks.length > 0 && shuffledBlocks.every(block => block.flipped)) {
            setIsGameFinished(true); // Mostrar el modal al ganar
        }
    }, [shuffledBlocks]);

    const shuffleArray = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };

    const handleMemoClick = (block) => {
        const flippedBlock = { ...block, flipped: true };
        let shuffledBlocksCopy = [...shuffledBlocks];
        shuffledBlocksCopy.splice(block.index, 1, flippedBlock);
        setShuffledBlocks(shuffledBlocksCopy);

        if (selectedBlock === null) {
            setselectedBlock(block);
        } else if (selectedBlock.image === block.image) {
            setselectedBlock(null);
        } else {
            setAnimating(true);
            setTimeout(() => {
                shuffledBlocksCopy.splice(block.index, 1,block);
                shuffledBlocksCopy.splice(selectedBlock.index, 1, selectedBlock);
                setShuffledBlocks(shuffledBlocksCopy);
                setselectedBlock(null);
                setAnimating(false);
            }, 1000);
        }
    };

    const handleRestart = () => {
        setSize(size.size)
        setIsGameFinished(false);
        const resizedImageList = images.slice(0, (lastSize * lastSize) / 2)
        const shuffledList = shuffleArray([...resizedImageList, ...resizedImageList])
        setShuffledBlocks(shuffledList.map((emoji, i) => ({ index: i, emoji, flipped: false })));
        setselectedBlock(null);
    };

    const handleGoHome = () => {
        navigate('/'); 
    };

    return (
        <div className='container'>
                <button className='boton' onClick={handleGoHome}> Volver al inicio </button>
                <img className='img' src='/src/assets/corazonMemoTest.png'/>
                <Board
                    blocks={shuffledBlocks}
                    animating={animating}
                    handleMemoClick={handleMemoClick}
                    size={size}
                />
            {isGameFinished && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>¡Felicidades, ganaste!</h2>
                        <button onClick={handleRestart}>Reiniciar juego</button>
                        <button onClick={handleGoHome}>Volver al inicio</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GamePage;
