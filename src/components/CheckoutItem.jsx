import React from 'react'
import { remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const CheckoutItem = ({ cartItem }) => {

    const dispatch = useDispatch()
    const { name, price, image, quantity, color1 } = cartItem;
    return (
        <>
            <div className="row">
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={image} className="w-100" alt="images" />
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 mb-4 mb-lg-0 checkout_text">
                    <p><strong>{name}</strong></p>
                    <p>Color: {color1}</p>
                    <p>Price: <strong>$ {(price * quantity).toFixed(2)}</strong></p>                    
                    <div className="form-outline" style={{ maxWidth: "80px" }}>
                        <input id="form1" name="quantity" value={quantity} type="number" className="form-control" onChange={() => null} />
                    </div>
                    <button className="btn btn-danger btn-sm me-1 my-2 px-5" onClick={() => dispatch(remove(cartItem))}>Remove</button>
                </div>
                <hr className="my-4" />
            </div>

        </>
    )
}

export default CheckoutItem
