import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { fb_createUserWithEmailAndPassword } from '../utils/firebase.js';
import { user_doc } from "../utils/firebase.js";
import { setDoc } from "firebase/firestore"
import { regularRequest } from "../utils/front_end_api";



function Signup() {
    const navigate = useNavigate();
    const [signup_email, set_signup_email] = useState("");
    const [signup_password, set_signup_password] = useState("");

    function signup_user() {
        fb_createUserWithEmailAndPassword(signup_email, signup_password).then((user_credential) => {
            console.log(user_credential.user);

            //add user section to database
            regularRequest("/users", "POST", {
                id: user_credential.user.uid
            }, (response) => {
                console.log(response);
                navigate("/home");
            })
        }).catch((error) => {
            console.error(error);
            switch (error.code) {
                case 'auth/weak-password':
                    alert(error.message)
                    break;
                default:
                    alert(error.message);
            }
        });
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => set_signup_email(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => set_signup_password(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e) => {
                e.preventDefault(); //Prevent page from reloading
                console.log("Signup submit button clicked");
                signup_user()
            }}>
                Submit
            </Button>
            <Button variant="primary" onClick={() => navigate("/signin")}>
                Already have an account? Sign-in
            </Button>
        </Form>
    )
}

export default Signup;