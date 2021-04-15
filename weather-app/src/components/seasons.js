import React from 'react';
import Display from './displayDiv';

const Season = (props) => {

    const month = new Date().getMonth() + 1

    if (props.lat > 0) {
        return ((month > 3 && month < 9) ? <Display season='summer' message="Let's hit the Beach." /> : <Display season='winter' message="Damn it's chilly out there." />)
    }
    else {
        return ((month > 3 && month < 9) ? <Display season='winter' message="Damn it's chilly out there." /> : <Display season='summer' message="Let's hit the Beach." />)
    }

}

export default Season