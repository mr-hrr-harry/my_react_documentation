import { useEffect, useState } from "react"

let DigiTimer = () => {

    let [state, setState] = useState({
        date: new Date().toDateString(),
        time: new Date().toLocaleTimeString()
    })

    useEffect(() => {
        let updateTime = setInterval(() => {                          // componentDidMount()
            setState((state) => ({
                ...state,
                time: new Date().toLocaleTimeString()
            }))
        }, 1000);

        let updateDate = setInterval(() => {
            setState((state) => ({                  // If started exactly at 12:01:00 PM
                ...state,
                date: new Date().toDateString()
            }))
        }, 84000000);

        return () => {                              // // componentWillUnmount()
            clearInterval(updateDate)
            clearInterval(updateTime)
        }

    }, [])                                          // componentWillUpdate()

    let { time } = state

    return (
        <div className="container shadow-lg d-flex justify-content-center">
            <div className="card">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <div className="card-head bg-success text-white fw-md rounded p-3">
                            Digital Timer
                        </div>
                        <div className="card-body">
                            <h2>{time} </h2>
                            <h6>{state.date} </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default DigiTimer