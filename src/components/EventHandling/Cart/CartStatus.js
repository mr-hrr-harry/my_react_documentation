import { useState } from "react"

let Cart = () => {

    let [state, setState] = useState({
        sno: 1,
        img: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
        name: 'Atomic Habits',
        price: 491,
        qty: 1,
    })

    const incQt = () => {
        setState((state) => ({
            ...state,
            qty: state.qty+1
        }))
    }

    const decQt = () => {
        setState((state) => ({
            ...state,
            qty: state.qty-1 > 0 ? state.qty-1 : 1,
        }))
    }

    return(
        <>
            <div className="container shadow-lg mt-5 ">
                <div className="row">
                    <div className="col mt-5">
                        <table className="table table-stripped text-center table-hover">
                            <tr className="bg-dark text-white ">
                                <th>S.No</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                                <td> {state.sno} </td>
                                <td> <img src={state.img} alt="atomichabits" width={60} height={80}/> </td>
                                <td> {state.name} </td>
                                <td> {state.price} </td>
                                <td> 
                                    <i className="fa fa-minus-square mx-1" onClick={decQt}></i>
                                    {state.qty} 
                                    <i className="fa fa-plus-square mx-1" onClick={incQt}></i>
                                </td>
                                <td> {state.price * state.qty} </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Cart