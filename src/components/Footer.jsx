import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import image from '../assets/images/payment.png'
import { AiFillYoutube, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
const Footer = () => {
    return (
        <div className="footer">
            <Container>
            <Row>
                <Col lg={4}>
                    <div className="footer-1 footer_wrapper">
                    <h5>More about Orebi Shop</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint ab ullam, numquam nesciunt in.</p>
                    <ul>
                        <li><AiFillYoutube/></li>
                        <li><AiFillGithub/></li>
                        <li><BsFacebook/></li>
                        <li><AiFillLinkedin/></li>
                    </ul>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="footer-2 footer_wrapper">
                    <h5>Shop</h5>
                    <ul>
                        <li>Accesories</li>
                        <li>Clothes</li>
                        <li>Electronics</li>
                        <li>Home appliances</li>
                        <li>New Arrivals</li>
                    </ul>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="footer-3 footer_wrapper">
                    <h5>Your account</h5>
                    <ul>
                        <li>Profile</li>
                        <li>Orders</li>
                        <li>Addresses</li>
                        <li>Account Details</li>
                        <li>Payment Options</li>
                    </ul>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="footer-4 footer_wrapper">
                    <h5>Subscribe to our newsletter.</h5>
                    <p>A at pellentesque et mattis porta enim elementum.</p>
                    <Form className='footer_inner'>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Inseart your email" />
                        </Form.Group>
                        <Button variant="outline-light" type="submit"> Submit</Button>
                    </Form>
                    <Image src={image} className='w-75 mt-4'/>
                    </div>

                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Footer
