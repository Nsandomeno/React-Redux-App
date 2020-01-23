import axios from 'axios';

const GET_COIN_DATA_START = 'GET_COIN_DATA_START';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export const getCoinData = () => (dispatch) => {
    dispatch( { type: 'GET_COIN_DATA_START' } );
    axios.get('https://api.coinlore.com/api/tickers/?start=0&limit=4')
        .then(response => {
            console.log("This is the response from axios in actions:", response.data.data)
            let coinArray = response.data.data
            dispatch( { type: 'SUCCESS', payload: coinArray })
        })
        .catch(error => {
            console.log("This is caught error in axios:", error)
            dispatch( { type: 'FAILURE', payload: error.response })
        })
}