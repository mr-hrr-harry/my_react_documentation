import { useState } from "react"

let LoginTag = () => {

    let [state, setState] = useState({
        user: {
            name: '',
            pass: '',
        }
    })

    let { user } = state
    
    let updateName = (event) => {
        setState((state) => ({
            user : {
                ...user,
                name: event.target.value
            }
        }))
    }


    let updatePass = (event) => {
        setState((state) => ({
            user:{
                ...user,
                pass: event.target.value
            }
        }))
    }

    let loginUser = (event) => {
        event.preventDefault()
        console.log(user)
    }

    return (
        <div className="container shadow-lg mt-5 p-3 d-flex justify-content-center">
            <div className="row">
                <div className="card">
                    <h3 className="bg-dark text-white p-3">React Form</h3>
                    <input
                        type="text"
                        value={user.name}
                        className="border p-3 m-2"
                        placeholder="User Name"
                        onChange={updateName}
                    />
                    <input
                        type="text"
                        value={user.pass}
                        className="border p-3 m-2"
                        placeholder="Password"
                        onChange={updatePass}
                    />
                    <input
                        type="submit"
                        className="bg-warning p-2 m-2"
                        onClick={loginUser}
                    />
                </div>
                {/* <pre>{JSON.stringify(user)}</pre> */}
            </div>
        </div>
    )
}

export default LoginTag