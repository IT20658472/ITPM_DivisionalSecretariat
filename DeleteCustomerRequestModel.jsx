import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";

import axios from 'axios';
import swal from 'sweetalert'

export default function DeleteCustomerRequestModel(props) {

    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [customer_id, setCustomerID] = useState("");
    const [name , setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [email_address, setEmailaddress] = useState("");
    const [phone_number, setPhonenumber] = useState("");
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    const customerrequestData ={
        customer_id,
    name,
    age,
    gender,
    address,
    email_address,
    phone_number,
    username,
    password,
    };

    const DeleteShow = () => {
        console.log(props.eid)
        setCustomerID(props.eid)
        axios.get("http://localhost:5000/customer/delete/" + props.eid)
        .then(function (response) {
            setCustomerID(response.data['customer_id']);
            setName(response.data['name']);
            setAge(response.data['age']);
            setGender(response.data['gender']);
            setAddress(response.data['addresss']);
            setEmailaddress(response.data['emailaddress']);
            setPhonenumber(response.data['phonenumber']);
            setUsername(response.data['username']);
            setPassword(response.data['password']);
            setShow(true)


        }).catch(function (error) {
            console.log(error);
            alert('invalid')
        });


    };

    function submitForm(e) {
        e.preventDefault();
        axios.delete('http://localhost:5000/customer/delete/' + props.eid)
            .then(function (response) {
                setShow(false);
                swal({ text: "Customer Request Successfully Deleted", icon: "success", button: "Okay!" }).then((value) => {
                    window.location = '/customerrequestview';
                });
                console.log(props.eid);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

  

    return (
        <>
            <Button className='btn-danger me-2' onClick={DeleteShow}>
                Delete
            </Button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">Delete Customer Request</Modal.Title>

                </Modal.Header>
                <Modal.Body>


                    <Form>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            Customer_Id
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" value={customer_id} disabled />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                            Name
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" value={ name} disabled />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                            Age
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" value={age} disabled />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                           Gender
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" value={gender} disabled />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                            Address
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" value={address} disabled />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                            Email Address
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" value={email_address} disabled />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                            Phone_Number
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" value={phone_number} disabled />
                            </Col>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={submitForm}>
                        Delete Customer Request
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}