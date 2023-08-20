import { useEffect, useState } from "react"
import APIData2 from "../../../services/APIData2"

let AsyncServerData = () => {

    let [state, setState] = useState({
        users: []
    })

    useEffect(() => {
        let dataSet = {}

        let fillState =  async () => {                      // Function
            try {
                dataSet = await APIData2.getUsers()
                setState((state) => ({
                    users: dataSet.data
                }))
            } catch (err) {
                console.log(err)
            }
        }

        fillState()                                           // Call Back

        return () => {
            dataSet = {}
        }
    }, [])

    let { users } = state

    return (
        <div className="conatainer shadow-lg m-5">
            <div className="row">
                <div className="col">
                    <table className="table table-hover text-center">
                        <thead>
                            <tr>
                                <th className="bg-dark text-white fw-md">User ID</th>
                                <th className="bg-dark text-white fw-md">Name</th>
                                <th className="bg-dark text-white fw-md">Email ID</th>
                                <th className="bg-dark text-white fw-md">Address</th>
                                <th className="bg-dark text-white fw-md">Phone</th>
                                <th className="bg-dark text-white fw-md">Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length > 0 && users.map(user => {
                                    return(
                                        <tr key={user.id}>
                                            <td>{user.id}</td>  
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.address.street}, {user.address.city}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.company.name}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AsyncServerData