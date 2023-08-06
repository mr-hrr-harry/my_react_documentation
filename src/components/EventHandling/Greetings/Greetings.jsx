import { useState } from 'react'
import './Greetings.css'

let Greeting = () => {

    let [state, setState] = useState({
        mssg: 'Hello'
    })

    const greetMorning = () => {
        setState((state) => ({
            mssg: 'Good Morning! 🐔'
        }))
    }

    const greetAfternoon = () => {
        setState((state) => ({
            mssg: 'Good Afternoon! ☀️'
        }))
    }

    const greetEvening = () => {
        setState((state) => ({
            mssg: 'Good Evening! 🌃'
        }))
    }

    return (
        <>
            <div className='container mt-5 shadow-lg'>
                <div className='row'>
                        <div className='card m-5'>
                            <div className='card-header bg-primary text-white'>
                                <p className='h4'>Greetings</p>
                            </div>
                            <div className='w-200'>
                                <p className='display-5 mt-3'>{state.mssg}</p>
                                <button className='btn btn-success fw-bold' onClick={greetMorning}>Morning</button>
                                <button className='btn btn-warning fw-bold' onClick={greetAfternoon}>Afternoon</button>
                                <button className='btn btn-danger fw-bold' onClick={greetEvening}>Evening</button>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )

}

export default Greeting