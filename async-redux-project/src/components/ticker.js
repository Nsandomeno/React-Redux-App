import React from 'react';
import { connect } from 'react-redux';
import { getCoinData } from '../actions/index.js';

function Ticker(props) {
    return (
        <div>
            <h1> Hello from ticker component </h1>
            <button onClick={props.getCoinData}> Get Coin Data </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        coins: state.coins,
        error: state.error
    }
}

export default connect(mapStateToProps, { getCoinData })(Ticker);
