import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import CheckoutItem from './CheckoutItem';
import UserInfo from './UserInfo';

const Checkout = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleInformation = () => {
        setShow(true);
      }

    const { cartItems, total } = useSelector(state => state.cart)
    let shipping = 0;
    if (total === 0) {
        shipping = 0;
    }
    else if (total < 500) {
        shipping = 60;
    }
    else if (total > 500) {
        shipping = 50;
    }
    return (
        <>
            {
                cartItems.length === 0 ? 
                " "
                :
                <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3 text-center">
                                    <Button variant="light"  onClick={handleInformation} className="mb-0">Add Information</Button>
                                    <UserInfo
                                     show= {show}
                                     handleClose= {handleClose}
                                    />
                                </div>
                                <div className="card-body">
                                    {
                                        cartItems.map(cartItem => (
                                            <CheckoutItem
                                                key={cartItem.id}
                                                cartItem={cartItem}
                                            />
                                        ))
                                    }


                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <Form className='d-flex my-4'>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter Voucher Code" />
                                        </Form.Group>
                                        <Button variant="info" className='px-4 text-white' type="submit">
                                            APPLY
                                        </Button>
                                    </Form>
                                    <ul className="list-group list-group-flush">
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Products
                                            <span>$ {(total).toFixed(2)}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                            <span>$ {shipping}</span>
                                        </li>
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                            </div>
                                            <span><strong>$ {(total + shipping).toFixed(2)}</strong></span>
                                        </li>
                                    </ul>
                                    <button className="button2"><Link className='button-text' to='/checkout'>Place Order</Link> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            }
        </>
    )
}

export default Checkout
