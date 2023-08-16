import { useState } from "react"
import ChildComponent from "./Child"

let ParentComponent = () => {

    let [state, setState] = useState({
        mssg: 'I\'m Parent Component Data! #3679Ax0'
    })

    let customStyles = {
        textAlign: "right",
        color: "blue",
    }

    return(
        <div className="container m-5 p-3 shadow-lg">
            <div className="card">
                <p className="p-3 rounded bg-success text-white">I'm parent Component!</p>
                <p> {"=>"} {state.mssg} </p>
                <ChildComponent childData={state.mssg} styleComp={customStyles} />
            </div>
        </div>
    )
}

export default ParentComponent