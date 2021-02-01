import {NavLink} from 'react-router-dom';
import './Welcomepage.css'

export const Welcome = ()=> {
    
        return(
            <div id='welcome'>
                <h1>Instructions</h1>
                <h2>Subject: Chemistry <br /> Test Duration: 20 minutes</h2>
                <h3 id='warningText'>Any form of examination malpratice will result to automatic failure</h3>
                <NavLink to='/test'>
                    <button id='toTestBtn'>Continue</button>
                </NavLink>

                <nav id='author'>Pauliski Academy</nav>
            </div>
        )
    
}