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
                    Welcome {students[0].name}. You're {students[0].age}yrs old!
                </p>
            </div>
            <div>
                <p>
                    Welcome {students[1].name}. You're {students[1].age}yrs old!
                </p>
            </div>
            <div>
                <p>
                    Welcome {students[2].name}. You're' {students[2].age}yrs old!
                </p>
            </div>
        </Fragment>
    )
}

export default FuncStates