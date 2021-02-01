import React from 'react';
import './Answer.css'

const Question = (props)=>{
    return(
        <h1 id='questionText'>{props.question}</h1>
    )
}
export default Question