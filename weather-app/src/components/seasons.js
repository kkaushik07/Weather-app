import React from 'react';
import Display from './displayDiv';

const Season = (props) => {

    const month = new Date().getMonth() + 1

    if (props.lat > 0) {
        return ((month > 3 && month < 9) ? <Display message='summer' /> : <Display message='winter' />)
    }
    else {
        return ((month > 3 && month < 9) ? <Display message='winter' /> : <Display message='summer' />)
    }

}

export default Season