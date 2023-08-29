import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { productData } from '../fackData/productData'
import Product from '../components/Product'
import Sidebar from '../components/Sidebar'
import { AiFillAppstore } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
const Shop = () => {
    return (
        <>
            <Container className='shopping mb-5'>
                <h2>Products</h2>
                <Row>
                    <Col lg={3}>
                        <Sidebar />
                    </Col>
                    <Col lg={9}>
                        <div className="shopping_left">
                            <p><AiFillAppstore className='shopping_icon1' /> <HiMenu className='shopping_icon2' /></p>
                            <div className="shopping_right">
                               <div className=" mx-5">
                               <Form.Select aria-label="Default select example ">
                                    <option>Best Sellers</option>
                                    <option value="1">New Arrivals</option>
                                    <option value="2">Special Offers</option>
                                    <option value="3">Featured</option>
                                </Form.Select>
                               </div>
                                <div className="">
                                <Form.Select>
                                    <option>12</option>
                                    <option value="7">24</option>
                                    <option value="8">36</option>
                                    <option value="9">48</option>
                                </Form.Select>
                                </div>
                            </div>
                        </div>
                        <Row>
                            {
                                productData.map(item => (
                                    <Product
                                        key={item.id}
                                        item={item}
                                    />
                                ))
                            }
                        </Row>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Shop
