import { useState } from "react"
import React from "react"

let CartList = () => {

    let [state, setState] = useState({
        products: [
            {
                sno: 1,
                pdt: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
                name: 'Atomic Habits',
                prc: 491,
                qty: 1,
            },
            {
                sno: 2,
                pdt: 'https://m.media-amazon.com/images/I/41tAl+Cn1AL._SX322_BO1,204,203,200_.jpg',
                name: 'The Monk who Sold his Ferrari',
                prc: 203,
                qty: 1,
            },
            {
                sno: 3,
                pdt: 'https://m.media-amazon.com/images/I/21Hh+QOJKfL._BO1,204,203,200_.jpg',
                name: 'Who Will Cry When You Die?',
                prc: 161,
                qty: 1,
            },
            {
                sno: 4,
                pdt: 'https://m.media-amazon.com/images/I/51Gn2JFKIZL._SX325_BO1,204,203,200_.jpg',
                name: 'Everything Is F*cked ',
                prc: 332,
                qty: 1,
            },
            {
                sno: 5,
                pdt: 'https://m.media-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg',
                name: 'The Subtle Art of Not Giving a F*ck',
                prc: 245,
                qty: 1,
            },
        ]
    })

    let { products } = state

    let incQty = (prodId) => {
        
        // Filter & Update the qty count

        let items = products.map((product) => {
            if(product.sno === prodId){
                return{
                    ...product,
                    qty: product.qty + 1,
                }
            }
            return product
        })

        // Update the array with 'items' product
        setState((state) => ({
            products: [...items]
        }))

    }

    let decQty = (prodId) => {
        
        let items = products.map((product) => {
            if(product.sno === prodId){
                return{
                    ...product,
                    qty: product.qty - 1 > 0 ? product.qty - 1 : 1
                }
            }
            return product
        })

        setState((product) => ({
            products: [...items]
        }))

    }

    return (
        <>
        <div className="mt-5 shadow-lg">
            <div className="row m-5">
                <table className="table  text-center">
                    <thead className="text-center">
                        <tr className="bg-dark text-white" key={0}>
                            <th>S.No.</th>
                            <th>Product</th> 
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th> 
                            <th>Total</th>
                        </tr>
                        {/* <br /> */}
                    </thead>
                    {/* <tbody> */}
                    {
                        products.map((product) => {

                            return (
                                
                                    <tr key={product.sno}>
                                        <td>{product.sno}</td>
                                        <td><img src={product.pdt} alt="" width={90} height={120} /></td>
                                        <td>{product.name}</td>
                                        <td>₹{product.prc.toFixed(2)}/-</td>
                                        <td>
                                            <i className="fa fa-minus-square" onClick={() => decQty(product.sno)}></i>
                                            {product.qty}
                                            <i className="fa fa-plus-square" onClick={() => incQty(product.sno)}></i>
                                        </td>
                                        <td>₹{(product.prc * product.qty).toFixed(2)}/-</td>
                                    </tr>

                            )
                        }
                        )

                    }
                    {/* </tbody>  */}
                </table>
            </div>
        </div>
        
        </>
    )
}

export default CartList