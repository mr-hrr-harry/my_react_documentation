import React, { Fragment } from "react";
import './ClassProps.css'

class ClassProps extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const titleStyles = {
            backgroundColor: '#000000',
            color: '#ffffff',
            width: '200px',
            height: '40px',
            textAlign: 'center',
            borderRadius: '10px',
            fontWeight: '600'
        }

        return (
            <Fragment>
                <div className='card'>
                    <div className="title" style={titleStyles}>
                       <p id="headContent">Welcome {this.props.name} </p>
                    </div>
                    <div>
                        <p>Name: {this.props.name}</p>
                        <p>Salary: {this.props.salary}</p>
                        <p>Gender: {this.props.gender}</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ClassProps