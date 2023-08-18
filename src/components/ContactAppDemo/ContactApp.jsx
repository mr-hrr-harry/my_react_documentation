import ContactList from "./ContactList"
import ContactCard from "./ContactCard"

let ContactApp = () => {
    return (
        <>
            <div className="container">
                <h3>Contact app</h3>
                <p>This is a contact app demo!</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <ContactList />
                    </div>
                    <div className="card">
                        <ContactCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactApp