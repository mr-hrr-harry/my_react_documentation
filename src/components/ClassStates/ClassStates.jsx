import React, {Fragment} from "react";
import './ClassStates.css'

class ClassStates extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            employees : [
                {
                    name: 'Harry', age: 26,
                },
                {
                    name: 'Joe', age: 30,
                },
                {
                    name: 'Sudhar', age:36
                },
            ]
        }
    }

    render(){
        return(
            <Fragment>
                <div className="cards">
                    <p>Welcome {this.state.employees[0].name}</p><br />
                    <p>Your age is {this.state.employees[0].age}yrs </p><br />
                </div>
                <br />
                <div className="cards">
                    <p>Welcome {this.state.employees[1].name}</p><br />
                    <p>Your age is {this.state.employees[1].age}yrs </p><br />
                </div>
                <br />
                <div className="cards">
                    <p>Welcome {this.state.employees[2].name}</p><br />
                    <p>Your age is {this.state.employees[2].age}yrs </p><br />
                </div>
            </Fragment>
        )
    }
}
export default ClassStates