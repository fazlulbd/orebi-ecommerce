import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Registration = () => {
    return (
        <div className="registration">
            <div className="registration_wrapper">
                <div className="registration_text">
                    <h3>Create your account</h3>
                    <Form className='p-4'>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>
                        <Button variant="dark" type="submit"> Submit </Button>
                        <Form.Text className="text-muted pt-3">
                           Don't have an Account? <Link to="/login">Sign in</Link>
                        </Form.Text>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Registration
