import { useNavigate } from 'react-router-dom';
import './Board.css';
import Block from './Block';
import { useEffect } from 'react';

const Board = ({animating, handleMemoClick, blocks, size}) => {

    return (
        <div className="board"
        style={{
            display: "grid",
            gridTemplateColumns:`repeat(${size.size}, 1fr)`,
            gap: "3px",
          }}>
            {blocks.map( (block, i) => {
                return <Block key={`${i}_${block.image}`} animating={animating} handleMemoClick={handleMemoClick} block={block} />
            })}
        </div>
    );
}

export default Board;