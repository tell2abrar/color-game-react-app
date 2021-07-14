import React from 'react';
import './GameSettings.css';
import generateColors from '../utils/generateColors';
import pickTargetColor from '../utils/pickTargetColor';

const GameSettings = ({setColors,gameMode,setGameMode,setTargetColor,gameStatus,setResetGame,setGameStatus})=>{

    const onNewColorButtonClick = (e)=>{
        console.log("new color button is clicked");
        if(gameStatus==='inProgress'){
            if (gameMode==='hard') {
                const tempColors = generateColors(6);
                const indexOfTargetColor = pickTargetColor(6);
                const targetColor = tempColors[indexOfTargetColor];
                setColors(tempColors);
                setTargetColor(targetColor);
    
            }else{
                const tempColors = generateColors(3);
                const indexOfTargetColor = pickTargetColor(3);
                const targetColor = tempColors[indexOfTargetColor];
                setColors(tempColors);
                setTargetColor(targetColor);


            }
        }else{
            setGameStatus('inProgress');
        }
    
    }

    const onEasyButtonClick = (e)=>{
        console.log("easy button is clicked");
        setGameMode('easy');
    }

    const onHardButtonClick = (e)=>{
        console.log("hard button is clicked");
        setGameMode('hard');
    }

    return (
        <div className="game-settings">
            <div className="flex-container">
                <button className="btn new-color-btn" onClick={onNewColorButtonClick}>{gameStatus==='inProgress'?'New Colors':'New Game'}</button>
                {gameStatus==='inProgress'?null:<p className="game-status">You Won!</p>}
                <button className={`btn easy-btn ${gameMode==='easy'?'active':' '}`} onClick={onEasyButtonClick}>Easy</button>
                <button className={`btn hard-btn ${gameMode==='hard'?'active':' '}`} onClick={onHardButtonClick}>Hard</button>
            </div>
        </div>
    );

};

export default GameSettings;