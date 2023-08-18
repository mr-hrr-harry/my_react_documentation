import { useEffect, useState } from "react"
import ServerData from "../../../services/APIData"

let ServerDataComp = () => {

    let [state, setState] = useState({
        users: []
    })


    useEffect(() => {
        ServerData.fetchData().then((res) => {
            setState((state) => ({
                users: res.data
            }))
        }).catch((err) => {
            console.log(err)
        })
    },[])


    let {users} = state

    return (
        <div className="container m-5">
            <div className="row">
                <div className="col">
                    <table className="table table-hover text-center">
                        <thead >
                            <tr>
                                <th className="bg-dark text-white">User ID</th>
                                <th className="bg-dark text-white">Name</th>
                                <th className="bg-dark text-white">Email ID</th>
                                <th className="bg-dark text-white">Address</th> 
                                <th className="bg-dark text-white">Phone</th>
                                <th className="bg-dark text-white">Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length > 0 && users.map((user) => {
                                    return(
                                        <tr key={user.id}>
                                            <td>{user.id} </td>
                                            <td>{user.name} </td>
                                            <td>{user.email} </td>
                                            <td>{user.address.street} {user.address.city} </td>
                                            <td>{user.phone} </td>
                                            <td>{user.website} </td>
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

export default ServerDataComp