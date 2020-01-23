import React from 'react';
import { connect } from 'react-redux';
import { getCoinData, SUCCESS } from '../actions/index.js';
import LoaderSpinner from './loaderSpinner.js';
import Display from './display.js';

import '../App.css';



function Ticker(props) {
    return (
        <div>
            <h1> Coin Info Checkup </h1>
            {/*  No Coin Data in state */}
                {!props.coins && <button onClick={props.getCoinData}> Get Coin Data </button>}
            {/*  Coin Data in State and Fetch Complete (SUCCESS) */}
                {props.coins && !props.isLoading && <button onClick={props.getCoinData}> Update </button>}
            {/* Initial State Settings */}
                {!props.isLoading && !props.coins && !props.error && <h2>Get some coin data!</h2>}
            {/* Loading State */}
                {props.isLoading && <LoaderSpinner /> }
            {/* Displaying Coin Data once Fetch is Successful (SUCCESS) */}
                {props.coins && !props.isLoading && <Display coins={props.coins} />}
            {/* Error State */}
                {props.error && <div className="error-div"> <h1 className="error-message"> {props.error} </h1> </div>}
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
