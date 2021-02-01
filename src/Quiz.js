import React, { useEffect, useState } from 'react';
import {Questions} from './QuestionBank';
import Question from './Question';
import Answer from './Answer';
import { Submit } from './Submit';
import Timer from './Timer'
import './Quiz.css'


export const Quiz = ()=>{
    const [questionIndex, setQuestionIndex] = useState(0)
    const [userAnswer, setUserAnswer] = useState(null)
    const [textColor, setTextColor] = useState('black')
    const [color, setColor] = useState('yellow')
    const [colorSwitch, setColorSwitch] = useState('beige')
    const [clickedAnswers, setClickedAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [submit, setSubmit] = useState(false)
    const [time, setTime] = useState({}) 
    const [disable, setDisable] = useState(false)
    const [seconds, setSeconds] = useState(300)
    const firstIndex = questionIndex === 0
    const lastIndex = questionIndex === Questions.length - 1

    let timer = 0
    
    const checkAnswer = answer =>{
        setDisable(true)
        setUserAnswer(answer)
        //clickedAnswers.splice(questionIndex, 1, answer)
        clickedAnswers[questionIndex] = answer
    }
    
    //  *** Previous Button Handler ***
    const Previous = ()=>{
        setQuestionIndex(prev => prev - 1)
    }
    // Next Button Handler
    const Next = ()=>{
       setQuestionIndex(prev => prev +1)
    
    }
    //  *** Submit Button Handler ***
    const submitHandler = ()=>{

        for(let i=0; i<Questions.length; i++){
            if(clickedAnswers[i] === Questions[i].answer){
            setScore(prev => prev + 1)
            }
        }
        setSubmit(true)
    }
    //  *** Conversion to hours minute and seconds Handler ***
    const secondsToTime = (sec)=>{
        let hours = Math.floor(sec / 3600)
        let minDivisor = sec % 3600;
        let minutes = Math.floor(minDivisor / 60)
        let secDivisor = minDivisor % 60
        let seconds = Math.ceil(secDivisor)

        let obj = {
            h: hours,
            m: minutes,
            s: seconds
        }
        return obj
    }
    const Quest = (i)=>{
        setQuestionIndex(i-1)
        
    }
    //  *** Timer display Handler ***
    useEffect(()=>{
        let timeLeftVar = secondsToTime(seconds);
        setTime(timeLeftVar);
        if (timer ==0 && seconds > 0) {
           timer = setInterval(()=>{
                const sec = seconds - 1
                setSeconds(sec)
                setTime(secondsToTime(sec))
                if(sec == 0) clearInterval(timer)
            }, 1000);
          }
          return ()=>{
              clearInterval(timer)
          }      
      }, [seconds])

      const getColour = (itemId) => {
          if (clickedAnswers[itemId - 1]) return 'green';
          if (questionIndex + 1 == itemId) return color;
          return colorSwitch;
      }
    
    return(
        
        <div id='wrapper'>
            <div id='wrapper-img'></div>
            {seconds == 0 ?
            <Timer score={score} length = {Questions.length}/>
              :submit
                ?  <Submit score={score} length = {Questions.length}/>
                : <div id='quiz-page'>
           <h3>Remaining time: {`${time.h} : ${time.m} : ${time.s}`}</h3>
            <Question question={Questions[questionIndex].question} />
        <Answer index={questionIndex} 
        Previous={Previous} 
        next={Next} 
        disabled={disable}
        clickedAnswers = {clickedAnswers}
        checkAnswer ={checkAnswer} 
        firstIndex={firstIndex} 
        lastIndex = {lastIndex} 
        userAnswer={userAnswer}
        submitHandler ={submitHandler}
        />
        
        <div id='quest'>{Questions.map((item, i)=>(
            <button
                key={i} 
                //style={{backgroundColor: questionIndex + 1 == itm.id ? color : ''}}
                onClick={()=>Quest(item.id)}
                className='questbtn'
                style={{backgroundColor: getColour(item.id), color: textColor} }
                
                >
                {item.id}
            </button>
        ))}
        </div>
        </div>
    
            }
        
        </div>
        
    ) 
    
}


