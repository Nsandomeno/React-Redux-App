import React from 'react';
import { connect } from 'react-redux';
import { getCoinData } from '../actions/index.js';
import LoaderSpinner from './loaderSpinner.js';


function Ticker(props) {
    return (
        <div>
            <h1> Coin Info Checkup </h1>
            <button onClick={props.getCoinData}> Get Coin Data </button>
            <button> Update </button>
            {!props.isLoading && !props.coins && <h2>Get some coin data!</h2>}
            {props.isLoading && <LoaderSpinner /> }
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
