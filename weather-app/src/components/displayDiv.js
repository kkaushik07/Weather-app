import React from 'react';

const Display = (props) => {

    return (<div style={{ textAlign:"center" }}>
        <h1>{props.season}</h1> <br/>
        <h1>{props.message}</h1>
    </div>)
}

export default Display