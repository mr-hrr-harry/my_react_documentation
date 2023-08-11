import { useState } from "react"

let CondRender = (props) => {

    let [state, setState] = useState({
        isLoggedIn: false
    })

    let {status} = state;

    return(
        <div className="container m-5">
            <div className="card m-5 p-3 shadow-lg" >
                <h2 className="bg-dark text-white p-2 rounded-2">{props.task} </h2>
                <br />
                {
                    state.isLoggedIn ?
                        <p>Welcome Harry!</p> :
                        <p>Please Login!</p>
                }
                {
                    state.isLoggedIn ? 
                        <button className="bg-warning rounded-2 border-1 p-2 m-2" onClick={() => {
                            setState((state) => ({
                                isLoggedIn: false
                            }))
                        }}>Logout</button> :
                        <button className="bg-success text-white rounded-2 border-1 p-2 m-2" onClick={() => {
                            setState((state) => ({
                                isLoggedIn: true
                            }))
                        }}>Login</button>

                }

            </div>
        </div>
    )

}

export default CondRender

