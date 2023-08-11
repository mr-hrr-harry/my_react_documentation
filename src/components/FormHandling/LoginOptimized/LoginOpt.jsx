import { useState } from "react"

let LoginOptimal = () => {

    let [state, setState] = useState({
        user: {
            name: '',
            pass: '',
        }
    })

    let {user} = state

    let renderInput = (event) => {
        setState((state) => ({
            user:{
                ...user,
                [event.target.name] : event.target.value,
            }
        }))
    }

    let loginUser = (event) => {
        event.preventDefault()
        console.log(user)
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="card">
                    <header className="bg-dark p-3 m-2 text-white fs-5">React Form</header>
                    <form action="" onSubmit={loginUser}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={user.name}
                            className="border p-3 m-2"
                            onChange={renderInput}
                        />

                        <input
                            type="text"
                            name="pass"
                            placeholder="Enter Password"
                            value={user.pass}
                            className="border p-3 m-2"
                            onChange={renderInput}
                        />
                        <br />

                        <input
                            type="submit"
                            className="btn bg-danger text-white p-2 m-3"
                            value={'LOGIN'}
                        />

                    </form>
                    <pre>{JSON.stringify(user)}</pre>
                </div>
            </div>
        </div>
    )
}

export default LoginOptimal