import { Fragment } from 'react'
import './WelcomeMssg.css'

let WelcomeMssg = ()=>{
    return(
        <Fragment >
            <div className='header_content'>
                Welcome to React!
            </div>
            <p id='para_content'>
                This is your first output!
            </p>
        </Fragment>
    )
}

export default WelcomeMssg