import React from 'react'
import {Questions} from './QuestionBank'
import './Answer.css'

const Answer = (props)=>{
    return(
        <div id='Answers'>
            <ul className="Answers">
            {Questions[props.index].options.map((option, i)=>(
                <li key={i} 
                onClick={()=>props.checkAnswer(option)}
                job=''
                disabled={props.disabled}
                className={`options ${props.userAnswer === option ? 'selected' : ''} ${props.clickedAnswers.includes(option) ? 'select' : ''}`} 
               >{option}</li>
            ))}
        </ul>
        <div id='mybtn'>
            <button onClick={props.Previous} disabled={props.firstIndex} className="mybtn firstbtn">Prev</button>
            <button onClick={props.next} disabled={props.lastIndex} className="mybtn">Next</button>
            <button onClick={props.submitHandler} className="mybtn submitbtn">Submit</button>
             
        </div>

        </div>
        
    )
}
export default Answer