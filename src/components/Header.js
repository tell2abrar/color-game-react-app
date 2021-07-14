import React from 'react';
import './Header.css';

const Header = ({targetColor,gameStatus})=>{
    const backgroundColor = gameStatus==='inProgress'?'rgb(70, 130, 180, 1)':`RGB(${targetColor.first}, ${targetColor.second}, ${targetColor.third})`;
    return (
        <div className="header" style={{backgroundColor:backgroundColor}} >
            <div>
                <h2>THE GREAT</h2>
                <h1 className="target-color">{`RGB(${targetColor.first}, ${targetColor.second}, ${targetColor.third})`}</h1>
                <p>COLOR GAME</p>
            </div>
        </div>
    );
};

export default Header;