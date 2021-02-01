import React from 'react';

const Timer = (props)=>{
    return(
        <h1 id='h1'>Your assessment as now been submitted automatically<br /> Your score is {props.score} out of {props.length}</h1>
    )
    
}
export default Timer