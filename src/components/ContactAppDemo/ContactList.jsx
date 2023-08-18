import { useState } from "react"
import React from "react"
import Services from "../../services/ContactData"

let ContactList = () => {

    let [state, setState] = useState({
        contacts: Services.getData()
    })

    let { contacts } = state

    return (
        <React.Fragment>
            <table className="table table-hover text-center">
                <thead className="bg-dark fw-bolf text-white">
                    <tr>
                        <th>S.No</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Mail ID</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        contacts.length !=0 && contacts.map((contact) => {

                            contact.uID = contact.id + (Math.floor(Math.random()*10001)).toString().substring(0, 5).padEnd(4,'0')
                            // console.log(contact)
                            return (
                                <tr key={contact.id}>
                                    <td>{contact.id} </td>
                                    <td>{contact.uID} </td>
                                    <td>{contact.name}</td>
                                    <td>{contact.phone} </td>
                                    <td>{contact.email} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default ContactList