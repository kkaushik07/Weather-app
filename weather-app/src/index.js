import React from 'react';
import ReactDOM from 'react-dom';
import Lat from './components/latitude'


const App = ()=>{
  return (
      <div>
        <Lat/>
      </div>
  )
}


ReactDOM.render(
    <App /> , document.getElementById('root')
);

