import { useState, Fragment } from "react"

let FuncStates = () => {

    let [state, setState] = useState({
        students: [
            {
                name: 'Harry' , age: 36, 
            },
            {
                name : 'Sudhar', age: 20,
            },
            {
                name : 'Joe', age: 18,
            },
        ]
    })

    let {students} = state  // Destructuring

    return(
        <Fragment>
            <div>
                <p>
                    Welcome {students[0].name}. Your age is {students[0].age}yrs
                </p>
            </div>
            <div>
                <p>
                    Welcome {students[1].name}. Your age is {students[1].age}yrs
                </p>
            </div>
            <div>
                <p>
                    Welcome {students[2].name}. Your age is {students[2].age}yrs
                </p>
            </div>
        </Fragment>
    )
}

export default FuncStates