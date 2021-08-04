import React from 'react';
import { useState } from 'react';
import { Button, Form, Alert, Spinner } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import './LoginPage.css'
import Parse from 'parse';
import UserModel from '../../model/UserModel';

function LoginPage({activeUser, onLogin}) {
    const [email, setEmail] = useState("nir@nir.com");
    const [pwd, setPwd] = useState("123");
    const [showInvalidLogin, setShowInvalidLogin] = useState(false);
    const [loggingIn, setLoggingIn] = useState(false);

    if (activeUser) {
        return <Redirect to="/recipes"/>
    }

    function login() {
        setLoggingIn(true);

        Parse.User.logIn(email, pwd).then(user => {
            // Invoke parent (App) function to update the activeUser state in the app
            onLogin(new UserModel(user));
        }).catch(err => {
            console.error(err);
            // Showing an alert
            setShowInvalidLogin(true);            
        }).finally(() => {
            setLoggingIn(false);
        });
    }

    return (
        <div className="p-login">
            <h1>Login to Recipe Book</h1>
            <p>or <Link to="/signup">create an account</Link></p>
            {showInvalidLogin ?
                <Alert variant="danger" onClose={() => setShowInvalidLogin(false)} dismissible>Invalid Credentials!</Alert> : null}
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
                    <Button variant="success" type="button" onClick={login} disabled={loggingIn}>
                        Login {loggingIn ? <Spinner animation="border" /> : null}
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default LoginPage;