import React from 'react';
import Loader from 'react-loader-spinner';

function LoaderSpinner() {
    return(
        <div>
            <Loader
            type="ThreeDots"
            color="purple"
            height={80}
            width={80}
            />
        </div>
    )
}

export default LoaderSpinner;