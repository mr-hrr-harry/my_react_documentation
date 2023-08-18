let ContactCard = (props) => {

    let { contactData } = props       // Destructuring!

    return (
        <>
            {
                contactData.name != undefined ?
                
                    <div className="card">
                        <p className="fw-bold fs-5">Name: {contactData.name}</p>
                        <div className="d-flex justify-content-center m-5">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" style={{ borderRadius: 10 }} height={100} width={100} alt="" />
                        </div>
                        <div className="m-2">
                            <p>Phone No.: {contactData.phone}</p>
                            <p>User ID: {contactData.uID} </p>
                            <p>Email: {contactData.email} </p>
                        </div>
                    </div>
                    :
                    <></>
            }
        </>
    )
}

export default ContactCard