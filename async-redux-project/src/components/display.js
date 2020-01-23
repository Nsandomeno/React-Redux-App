import React from 'react';
import CoinCard from './coinCard.js';
import '../App.css';

function Display(props) {
    return(
        <div className="CardCointainer">
            {
                props.coins.map((coin) => {
                    return (
                        <CoinCard coin={coin} />
                    )
                })
            }
        </div>
    )
}

export default Display;