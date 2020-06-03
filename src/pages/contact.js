import React from "react";
import {Form} from "react-bootstrap";

function Contact() {
    return(
        <>
        <h1>Contact</h1>
         <Form>
             <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="John Doe" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="5" />
            </Form.Group>
         </Form>
        </>
    )  
}

export default Contact;