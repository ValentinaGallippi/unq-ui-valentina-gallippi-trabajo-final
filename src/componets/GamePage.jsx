import { useEffect, useState } from 'react';
import Board from './Board';
import './GamePage.css';
import { useNavigate } from 'react-router-dom';
import imagen1 from '../assets/lover.png'
import imagen2 from '../assets/red.png'
import imagen3 from '../assets/speakNow-manos.png'
import imagen4 from '../assets/speakNow-violeta.png'
import imagen5 from '../assets/taylor record.png'
import imagen6 from '../assets/ttpd-blancojpg.png'
import imagen7 from '../assets/ttpd-gris.png'
import imagen8 from '../assets/ttpd.png'

const imageList = [imagen1,imagen2,imagen3,imagen4,imagen5,imagen6,imagen7,imagen8]

const GamePage = () => {
    const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
    const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
    const [animating, setAnimating] = useState(false);
    const [isGameFinished, setIsGameFinished] = useState(false); // Nuevo estado para el modal
    const navigate = useNavigate();

    useEffect(() => {
        const shuffledEmojiList = shuffleArray([...imageList, ...imageList]);
        setShuffledMemoBlocks(shuffledEmojiList.map((image, i) => ({ index: i, image, flipped: false })));
    }, []);

    useEffect(() => {
        if (shuffledMemoBlocks.length > 0 && shuffledMemoBlocks.every(memoBlock => memoBlock.flipped)) {
            setIsGameFinished(true); // Mostrar el modal al ganar
        }
    }, [shuffledMemoBlocks]);

    const shuffleArray = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };

    const handleMemoClick = (memoBlock) => {
        const flippedMemoBlock = { ...memoBlock, flipped: true };
        let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
        setShuffledMemoBlocks(shuffledMemoBlocksCopy);

        if (selectedMemoBlock === null) {
            setselectedMemoBlock(memoBlock);
        } else if (selectedMemoBlock.image === memoBlock.image) {
            setselectedMemoBlock(null);
        } else {
            setAnimating(true);
            setTimeout(() => {
                shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
                shuffledMemoBlocksCopy.splice(selectedMemoBlock.index, 1, selectedMemoBlock);
                setShuffledMemoBlocks(shuffledMemoBlocksCopy);
                setselectedMemoBlock(null);
                setAnimating(false);
            }, 1000);
        }
    };

    // const handleRestart = () => {
    //     setIsGameFinished(false);
    //     const shuffledEmojiList = shuffleArray([...emojiList, ...emojiList]);
    //     setShuffledMemoBlocks(shuffledEmojiList.map((emoji, i) => ({ index: i, emoji, flipped: false })));
    //     setselectedMemoBlock(null);
    // };

    const handleGoHome = () => {
        navigate('/'); // Redirigir al inicio
    };

    return (
        <div>
            <Board
                memoBlocks={shuffledMemoBlocks}
                animating={animating}
                handleMemoClick={handleMemoClick}
            />
            {isGameFinished && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>¡Felicidades, ganaste!</h2>
                        {/* <button onClick={handleRestart}>Reiniciar juego</button> */}
                        <button onClick={handleGoHome}>Volver al inicio</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GamePage;
