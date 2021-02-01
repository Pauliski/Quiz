import React from 'react';
import './Quiz.css'

export const Submit = (props)=>{
    return(
        <h1 id='h1'>You have successfully submitted your assessment <br /> Your score is {props.score} out of {props.length}</h1>
    )
}