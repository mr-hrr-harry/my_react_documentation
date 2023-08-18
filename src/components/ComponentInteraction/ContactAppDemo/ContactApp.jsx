import ContactList from "./ContactList"
import ContactCard from "./ContactCard"
import { useState } from "react"

let ContactApp = () => {

    let [state, setState] = useState({
        contactDetails: {}
    })

    let updateData = (data) => {
        setState((state) => ({
            contactDetails: data
        }))
    }

    return (
        <>
            <div className="container m-5 p-2 border rounded-3">
                <h3>Contact app</h3>
                <p>This is a contact app demo!</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <ContactList setData={updateData} />
                    </div>
                    <div className="col-md-3">
                        <ContactCard contactData={state.contactDetails}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactApp