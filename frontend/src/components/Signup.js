import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { auth } from '../utils/firebase.js';
import { user_db_section } from "../utils/firebase.js";



function Signup() {
    const [signup_email, set_signup_email] = useState("");
    const [signup_password, set_signup_password] = useState("");

    function signup_user() {
        auth.createUserWithEmailAndPassword(signup_email, signup_password).then((user_credential) => {
            console.log(user_credential.user);

            //add user section to database
            const today = new Date();
            const path_to_user_section_of_db = user_db_section(user_credential.user.uid);
            path_to_user_section_of_db.set({
                user_created: today
            }).then((result) => {
                console.log(result);
            }).catch((error) => console.error(error));
        }).catch((error) => console.error(error));
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
            <Button variant="primary" type="submit" onClick={() => signup_user()}>
                Signup
            </Button>
        </Form>
    )
}

export default Signup;