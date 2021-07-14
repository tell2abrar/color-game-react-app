import React,{useState,useEffect}from 'react';
import './App.css';
import Header from './Header';
import GameSettings from './GameSettings';
import GameBoard from './GameBoard';
import generateColors from '../utils/generateColors';
import pickTargetColor from '../utils/pickTargetColor';

const App = ()=>{

    console.log("********colors array length*******");
    const [colors,setColors] = useState([]);
    const [targetColor,setTargetColor] = useState();
    const [gameMode,setGameMode] = useState('hard');
    const [gameStatus,setGameStatus] = useState('inProgress');
    const [resetGame,setResetGame] = useState('false');
    console.log(colors);

    useEffect(()=>{
        if (gameMode==='hard') {
            const tempColors = generateColors(6);
            const indexOfTargetColor = pickTargetColor(6);
            const targetColor = tempColors[indexOfTargetColor];
            setColors(tempColors);
            setTargetColor(targetColor);
            setResetGame('false');

        }else{
            const tempColors = generateColors(3);
            const indexOfTargetColor = pickTargetColor(3);
            const targetColor = tempColors[indexOfTargetColor];
            setColors(tempColors);
            setTargetColor(targetColor);
            setResetGame('false');
        }

    },[gameMode,resetGame]);

    if(colors.length>0){

        return (
            <div className="app">
                <Header targetColor={targetColor} gameStatus={gameStatus}/>
                <GameSettings setColors={setColors} setGameMode={setGameMode} gameMode={gameMode} setTargetColor={setTargetColor} gameStatus={gameStatus} setResetGame={setResetGame} setGameStatus={setGameStatus}/>
                <GameBoard colors={colors} targetColor={targetColor} gameStatus={gameStatus} setGameStatus={setGameStatus}/>
            </div>
        );

    }else{
        return (
            <div className="app">
            </div>
        );
    }

};

export default App;