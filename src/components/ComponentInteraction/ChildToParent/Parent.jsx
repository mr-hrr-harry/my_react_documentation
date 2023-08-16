import { useState } from "react"
import ChildComponent2 from "./Child"

let ParentComponent2 = () => {

    let [state, setState] = useState({
        mssg: 'I\'m Parent Comp Data!',
        childMssg: ''
    })

    let retrieveData = (data) => {
        setState((state) => ({
            ...state,
            childMssg:  data + " displayed by Parent"
        }))
    }

    return (
        <>
            <div className="card">
                <p className="text-success text-left border p-3">    
                    I'm Parent
                </p>
                <p>{state.childMssg} </p>
                <ChildComponent2 data={state.mssg} sendData={retrieveData} />
            </div>
        </>
    )
}

export default ParentComponent2