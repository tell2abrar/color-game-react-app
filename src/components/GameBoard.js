import React from 'react';
import './GameBoard.css';

const GameBoard = ({colors,targetColor,setGameStatus,gameStatus})=>{
   
    const colorItems = colors.map((color,index)=>{
        const backgroundcolor = `RGB(${color.first}, ${color.second}, ${color.third})`; 
        return <div key={index}style={{backgroundColor:backgroundcolor}} onClick={(e)=>{
            if(targetColor!==color){
                e.target.style.opacity="0";
            }else{
                setGameStatus('over');
            }
        }} ></div>
    });

    const colorItemsAfterWin = colors.map((color)=>{
        const backgroundcolor = `RGB(${targetColor.first}, ${targetColor.second}, ${targetColor.third})`;
        return <div style={{backgroundColor:backgroundcolor,opacity:1}}></div>
    });

    return (
        <div className="game-board">
            <div className="grid-container">
                {gameStatus==='inProgress'?colorItems:colorItemsAfterWin}
            </div>
        </div>
    );
};

export default GameBoard;