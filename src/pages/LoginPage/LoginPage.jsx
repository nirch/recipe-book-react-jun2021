import React from 'react';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LoginPage.css'

function LoginPage(props) {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    function login() {
        console.log(email, pwd);
    }

    return (
        <div className="p-login">
            <h1>Login to Recipe Book</h1>
            <p>or <Link to="/signup">create an account</Link></p>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                        value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                        value={pwd} onChange={e => setPwd(e.target.value)} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="success" type="button" onClick={login}>
                        Login
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default LoginPage;