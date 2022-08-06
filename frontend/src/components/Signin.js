import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { fb_signInWithEmailAndPassword } from '../utils/firebase.js';
import { useNavigate } from 'react-router-dom';




function Signin() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate();

    function sign_in_user() {
        fb_signInWithEmailAndPassword(loginEmail, loginPassword).then((result) => {
            console.log(result);
            navigate("/home");
        }).catch((error) => {
            console.error(error);
            switch (error.code) {
                default:
                    alert(error.message);
            }
        });
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
                <Button variant="primary" type="submit" onClick={(e) => {
                    e.preventDefault();
                    sign_in_user()
                }}>
                    Submit
                </Button>
            </Form>
            <Button onClick={() => navigate("/signup")}>No account? Sign-up</Button>
        </div>
    )
}

export default Signin;