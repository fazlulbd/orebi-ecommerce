import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const UserInfo = ({ handleClose, show }) => {


    return (
        <>
            <Modal show={show} size="lg" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title >Modal heading</Modal.Title>
                </Modal.Header>
                <Form className='p-5'>
                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-4" controlId="validationCustomUsername">
                                <Form.Label column="sm">Full Name</Form.Label>
                                <Form.Control type="text" placeholder="enter your name" />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-4" controlId="formGridAddress1">
                                <Form.Label column="sm">Address</Form.Label>
                                <Form.Control type="text" placeholder="enter your address" />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-4" controlId="validationCustom03">
                                <Form.Label column="sm">Mobile Number</Form.Label>
                                <Form.Control type="number" placeholder="enter your mobile number" />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-4" controlId="validationCustom05">
                                <Form.Label column="sm">Province</Form.Label>
                                <Form.Control type="text" placeholder="province" />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-4" controlId="validationCustom06">
                                <Form.Label column="sm">City</Form.Label>
                                <Form.Control type="text" placeholder="enter your city" />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-4" controlId="validationCustom07">
                                <Form.Label column="sm">Area</Form.Label>
                                <Form.Control type="text" placeholder="enter your area" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <Modal.Footer>
                    <Button variant="primary"> Save </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UserInfo
