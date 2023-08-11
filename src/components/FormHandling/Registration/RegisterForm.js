import React, { useState } from 'react'

let RegisterComp = () => {

    let [state, setState] = useState({
        user:{
            name: '',
            mail: '',
            password: '',
            gender: '',
            dept: '',
            bio: '', 
        }
    })

    let myStyles = {
        paddingLeft: '10px'
    }

    let submitForm = (event) => {
        event.preventDefault()
        console.log(user)
    }

    let updateView = (event) => {
        setState((state) =>({

            user: {
                ...user,
                [event.target.name]: event.target.value,
            }

        }))
    }

    let updatePass = (event) => {
        setState((state) => ({
            user: {
                ...user,
                password: event.target.value,
            }
        }))
    }

    let {user} = state;

    return (
        <React.Fragment>
            <form onSubmit={submitForm}>
                <div className='shadow-lg m-5 d-flex justify-content-center'>
                    <div className="row mt-5">
                        <div className="card m-5">
                            <h3 className='bg-dark rounded p-3 m-3 text-white'>Registration Form</h3>
                            <input
                                type="text"
                                name='name'
                                // value={}
                                className='m-3 p-3 border-1 rounded'
                                placeholder='Name'
                                onChange={updateView}
                            />
                            <input
                                type="mail"
                                name='mail'
                                className='m-3 p-3 border-1 rounded'
                                placeholder='Email' 
                                onChange={updateView}
                            />
                            <input
                                type="password"
                                name='pass'
                                className='m-3 p-3 border-1 rounded'
                                placeholder='Password' 
                                onChange={updatePass}
                            />

                            <div className='d-flex justify-content-between m-3' style={myStyles}
                            onClick={updateView}>
                                <label htmlFor="gender" className='fw-bold' name='gender' >Gender: </label><br />
                                <div>
                                    <input type="radio" name='gender' value={'Male'} className='m-1' />
                                    <label htmlFor="male" >Male</label>
                                </div>

                                <div>
                                    <input type="radio" name='gender' value={'Female'} className='m-1' />
                                    <label htmlFor="female">Female</label>
                                </div>
                            </div>

                            <select name="dept" id="dept" className='m-3 p-3 border-1 rounded' 
                                onChange={updateView}>
                                <option value="default" selected hidden disabled>Department</option>
                                <option value="MECHANICAL">MECH</option>
                                <option value="COMPUTER SCIENCE">CSE</option>
                                <option value="INFORMATION TECHNOLOGY">IT</option> 
                            </select>

                            <textarea name="bio" id="bio" cols="30" rows="5" placeholder='Bio' className='m-3 p-3 rounded' 
                                onChange={updateView}>
                            </textarea>

                            <button type='submit' className='m-3 p-2 text-black bg-warning border rounded'>SUBMIT</button>
                        </div>

                        <div className="card d-flex justify-content-start m-5">
                            <h4 className='bg-dark rounded border-1 text-white fw-bold p-3 m-3'>Your Input</h4>
                            <br />

                            <h6>Name:</h6>
                            <label disabled className='bg-secondary text-white m-4 p-2 rounded'> {user.name} </label>
                            <br />

                            <h6>Mail ID:</h6>
                            <label disabled className='bg-secondary text-white m-4 p-2 rounded'>{user.mail}</label>
                            <br />

                            <h6>Gender:</h6>
                            <label disabled className='bg-secondary text-white m-4 p-2 rounded'>{user.gender} </label>
                            <br />

                            <h6>Department:</h6>
                            <label disabled className='bg-secondary text-white m-4 p-2 rounded'>{user.dept} </label>
                            <br />
 
                            <h6>Bio:</h6>
                            <label disabled className='bg-secondary text-white m-4 p-2 rounded'>{user.bio} </label>
                            <br />

                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment>
    )
}

export default RegisterComp