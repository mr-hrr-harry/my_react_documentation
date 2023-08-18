import { useState } from "react"
import React from "react"
import Services from "../../../services/ContactData"

let ContactList = (props) => {

    let [state, setState] = useState({
        contacts: Services.getData()
    })

    let { contacts } = state

    let clickListener = (userContact) => {
        props.setData(userContact)
    }

    let x=0
    let  myStyles = "bg-dark fw-bolf text-white"

    return (
        <React.Fragment>
            <table className="table table-hover text-center">
                <thead>
                    <tr>
                        <th className={myStyles} >S.No</th>
                        <th className={myStyles}>User ID</th>
                        <th className={myStyles}>Name</th>
                        <th className={myStyles}>Phone</th>
                        <th className={myStyles}>Mail ID</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        contacts.length !=0 && contacts.map((contact) => {
                            contact.uID = contact.id + 'UID'
                            // console.log(contact)
                            return (
                                <tr key={contact.id} onClick={() => clickListener(contact)}>
                                    <td>{contact.id} </td>
                                    <td>{contact.uID} </td>
                                    <td >{contact.name}</td>
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