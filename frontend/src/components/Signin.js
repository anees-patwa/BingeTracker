import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { auth } from '../utils/firebase.js';
import { Link } from 'react-router-dom';



function Signin() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    function sign_in_user() {
        auth.signInWithEmailAndPassword(loginEmail, loginPassword).then((result) => {
            console.log(result);
        }).catch((error) => console.error());
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setLoginEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => sign_in_user()}>
                    Submit
                </Button>
            </Form>
            <Button><Link to="/signup">Sign-up</Link></Button>
        </div>
    )
}

export default Signin;