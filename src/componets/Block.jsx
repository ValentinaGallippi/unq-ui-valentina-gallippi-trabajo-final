import './Block.css';

const Block = ({animating, handleMemoClick, block}) => {
    return(
    <div className="block" onClick={() => (!block.flipped && !animating) && handleMemoClick(block)}>
        <div className={`block-inner ${block.flipped && 'block-flipped'}`}>
            <div className="block-front">
            </div>
            <div className="block-back">
                <img className='image' src={block.image}/>
            </div>
        </div>
    </div>
    )
}

export default Block;