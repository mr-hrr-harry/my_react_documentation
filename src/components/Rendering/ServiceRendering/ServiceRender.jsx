import { useState } from "react";
import ServiceData from "../../../services/services";

let ProductPage = (props) => {

    let [state, setState] = useState({
        products: ServiceData.getBooksData()
    })

    let {products} = state;

    return (
        <div className="container shadow-lg mt-5 p-3 rounded-3">
            <h1 style={{ textAlign: "center" }}>{props.task}</h1>
            <div className="container m-2 border rounded-3">
                {
                    products.map((product) => {
                        return(
                            <div key={product.id} className="m-4 p-4 d-flex flex-row">
                                <div className="d-flex align-items-center">
                                    <img src={product.img} alt="" height={200} width={250   } />
                                </div>
                                <div className="p-3">
                                    <h4 className="fw-bold">{product.name}</h4>
                                    <p className="fw-light">Quantity: {product.qty} </p>
                                    {
                                        product.qty==0 ? <p className="text-danger fw-medium"> Out of Stock! </p>:
                                            product.qty<=10 ? <p className="text-warning fw-medium">Stock on demand!</p> :
                                            <p className="text-success fw-medium">Available!</p>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductPage;
