import { useState } from "react"

let UpdateComp = () => {

    let [state, setState] = useState({
        name: ''
    })

    let updateName = (event)=> {
        setState((state) => ({
            name: event.target.value
        }))
    }   

    return (
        <>
            <div className="container shadow-lg">
                <div className="row">
                    <div className="mt-5">
                        <div className="card">
                            <form action="">
                                <h3 className="nav-bar  bg-dark text-white p-3">React Form</h3> {/* bootstrap */}

                                <input
                                    type="text"
                                    value={state.name}
                                    className="border p-3 m-3"
                                    onChange={updateName}
                                />
                                <p className="m-3">
                                    {state.name}
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateComp