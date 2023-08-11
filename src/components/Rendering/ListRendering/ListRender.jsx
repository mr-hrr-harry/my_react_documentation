import React, { useState } from "react"

let ListRender = (props) => {

    let [state, setState] = useState({
        products: [
            {
                id: 1,
                name:'HP Pavilion Ryzen 5 Hexa Core 5625U',
                img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/u/b/s/-original-imagp7pfhsmmdawz.jpeg?q=70',
                qty: 9,
            },
            {
                id: 2,
                name: 'HP Pavilion Core i7 12th Gen  14-dv2015TU',
                img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/k/z/2/-original-imagp7pge3agtryz.jpeg?q=70',
                qty: 0,
            },
            {
                id: 3,
                name: 'HP Pavilion AMD Ryzen 5 5600H 15-ec2145AX',
                img: 'https://m.media-amazon.com/images/I/51DmOWr3rnL._AC_UY327_FMwebp_QL65_.jpg',
                qty: 30
            }
        ],
    })

    let {products} = state

    return(
        <React.Fragment>
            <div className="container shadow-lg m-5 p-3 rounded-4 d-flex flex-column justify-content-center">
                {/* <div className="row">
                    <div className="col"> */}
                    <h1 className="m-5">{props.task} </h1>
                        {
                            products.map((product) => {
                                return(
                                    <>

                                    <div key={product.id} className="m-2 p-5 shadow-lg d-flex flex-row rounded-4">
                                        <div className="m-3">
                                        <img src={product.img} height='150' width='200' alt="" />
                                        </div>
                                        <div className>
                                        <p className="h4">{product.name } </p>
                                        <p className="fw-light">Quantity: {product.qty} </p>
                                        {
                                            product.qty == 0 ? <p className="text-danger fw-medium">Out of Stock!</p> :
                                                product.qty < 10 ? <p className="text-warning fw-medium">Stock   on Demand!</p> :
                                                    <p className="text-success fw-medium">Available!</p>
                                        }
                                        </div>
                                    </div>
                                    <br />
                                    </>
                                )
                            })
                        }
                    </div>
                {/* </div>
            </div> */}
        </React.Fragment>
    )
}

export default ListRender