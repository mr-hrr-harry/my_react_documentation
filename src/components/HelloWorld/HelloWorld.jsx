import { Fragment } from 'react'
import './WelcomeMssg.css'

let HelloWorld = ()=>{
    return(
        <Fragment >
            <div className='header_content'>
                Welcome to React!
            </div>
            <p id='para_content'>
                This is your first output : Hello World!
            </p>
        </Fragment>
    )
}

export default HelloWorld