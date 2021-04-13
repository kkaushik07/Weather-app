import React from 'react';

const Season = (props) => {

    const month = new Date().getMonth()+1

    return((props.lat > 0 && month > 3 && month < 9 ) ? <div>Summer</div>:  <div>winter</div>)

}

export default Season 