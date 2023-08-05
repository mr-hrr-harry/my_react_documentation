import { Fragment } from "react"
import './Bootstrap.css'

let BootStrap = () => {

    return (
        <Fragment>
            <div className="userStyles navbar-dark bg-dark" >   {/*User Styles*/}
                <p className="content text-primary">
                    Terms and Conditions
                </p>
            </div>
            <div className="content align">
                <i className="fa fa-user-circle fa-2x gap"></i>
                <i className="fab fa-facebook fa-2x gap"></i><br /><br />
                Would you like to accept the terms and conditions of our services ?
            </div>
            <div className="btns_div">
                <button className="btn btn-success gap">
                    Accept
                </button>
                <button className="btn btn-warning gap">
                    View
                </button>
                <button className="btn btn-danger gap">
                    Cancel
                </button>
            </div>
        </Fragment>
    )
}

export default BootStrap