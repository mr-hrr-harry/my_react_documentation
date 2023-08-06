import { useState } from 'react'
import './Counter.css'

let Counter = () => {

    let [state, setState] = useState({
        count: 0
    })

    let {count} = state

    const incCt = () => {
        setState((state) => ({
            count: count+1
        }))
    }

    const decCt = () => {

        setState((state) => ({
            count: count-1 >= 0 ? count-1 : 0
        }))

    }

    return (
        <>
            <div className="container mt-5 shadow-lg">                      {/* div, margin-top, box-shadow */}
                <div className="row">
                    <div className="mt-5 col-md-3">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <p className="h4">Counter</p>
                            </div>
                            <div>
                                <h5 className="mt-3 display-3 fw-medium"> {count} </h5>
                                <button className="btn btn-success btn-sm fw-bold" onClick={incCt}>Increment</button>
                                <button className="btn btn-warning btn-sm fw-bold" onClick={decCt}>Decrement</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter 