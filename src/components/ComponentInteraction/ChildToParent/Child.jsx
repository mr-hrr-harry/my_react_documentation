import { useState } from "react"

let ChildComponent2 = (props) => {

    let [state, setState] = useState({
        childData: 'I\'m Child Comp Data!' 
    })

    let clickListener = () => {
        props.sendData(state.childData)
    }

    return (
        <>
            <p className="text-warning p-3 text-left border">
                I'm Child!
            </p>
            <p >{props.data} displayed by Child</p>
            <button className="rounded bg-success text-white p-2 m-2" onClick={clickListener}>Child Send</button>
        </>
    )

}

export default ChildComponent2