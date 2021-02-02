import React from 'react';
import './Quiz.css'

export const Submit = (props)=>{
    return(
        <div id='h1'>
            <h1>Your assessment is 
            <span className='score'>{Math.floor((props.score /props.length)*100)}%</span>
                </h1>
            </div>
    )
}