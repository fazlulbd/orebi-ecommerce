import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="login">
            <div className="login_wrapper">
                <div className="login_text">
                    <h3>Login</h3>
                    <Form className='p-4'>               
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>                       
                        <Button variant="dark" type="submit"> Submit </Button>
                        <Form.Text className="text-muted pt-3">
                          Don't have an Account? <Link to="/registration">Sign up</Link>
                        </Form.Text>
                    </Form>
                </div>
            </div>
        </div>
  )
}

export default Login
