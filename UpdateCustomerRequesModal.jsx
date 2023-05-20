import React from 'react'
import { Col, Row, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { MDBCol } from 'mdb-react-ui-kit';

export default function UpdateCustomerRequesModal(props) {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [customer_id , setCustomerID] = useState("");
  const [name , setName] = useState("");
  const [age , setAge] = useState("");
  const [gender , setGender] = useState("");
  const [address , setAddress] = useState("");
  const [email_address , setEmailaddress] = useState("");
  const [phone_number , setPhonenumber] = useState("");
  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");

    const [file, setFile] = useState(null);

 

    // const PF = "http://localhost:5000/images/";

   
     const customerrequestData = {
        customer_id,
    name,
    age,
    gender,
    address,
    email_address,
    phone_number,
    username,
    password,
    }
    if (file) {
        const data =new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        
        try {
            axios.post("http://localhost:5000/api/upload", data);
        } catch (err) {
          alert(err)
        }
      }

    const updateShow = () => {
        setCustomerID(props.eid)
        axios.get('http://localhost:5000/customer/' + props.eid).then(function (response) {
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
     
        axios.put('http://localhost:5000/customer/update/' + props.eid, customerrequestData)
            .then(function (response) {            
                setCustomerID('');
                setName('');
                setAge('');
                setGender('');
                setAddress('');
                setEmailaddress('');
                setPhonenumber('');
                setUsername('');
                setPassword('');
                setShow(false);
                swal({ text: "Cloth Successfully Updated", icon: "success", button: "Okay!" }).then((value) => {
                    window.location = '/customerrequestview';
                });
              
            })
            .catch(function (error) {
                console.log(error);
            });
    }


   

    return (
        <>
            <Button className='btn-success me-2' onClick={updateShow}>
                Edit
            </Button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">Update Request Details</Modal.Title>

                </Modal.Header>
                <Modal.Body>


                    <Form>

                    <div className='row justify-content-center'>
  <Col sm={3}>
  <fieldset>

    <Form.Group  className="p-2 bd-highlight d-flex flex-column justify-content-center" >
      
      <MDBCol  className='mb-4'>
      {file && (
        <img className='img-fluid rounded' src={URL.createObjectURL(file)} alt="" /> 
      )} 
      </MDBCol>
     
  
      
    </Form.Group>
  </fieldset>
  </Col>
  </div>
  <Col sm={10}>

  


                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3">
                            Customer_Id
                            </Form.Label>
                            <Col sm="7">
                            <Form.Control type="text" placeholder="Enter Customer Id   " value={customer_id} onChange={(e)=>setCustomerID(e.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >
                            Name
                            </Form.Label>
                            <Col sm="5" >
                            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3">
                            Age
                            </Form.Label>
                            <Col sm="7">
                            <Form.Control type="Email" placeholder="Enter Age"  value={age} onChange={(e)=>setAge(e.target.value)} />
                            </Col>
                        </Form.Group>

                        
 <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3"  >
   Gender
    </Form.Label>
    <Col sm={3}>
    <select className="Col-3" aria-label="Default select example" style={{height:"35px", width:"200px"}}  onChange={(e)=>setGender(e.target.value)}>
      <option selected>Select Item Category</option>
      <option value="Male">Male's</option>
      <option value="Female">Female's</option>
      
    </select>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm="3">
    Address
    </Form.Label>
    <Col sm="7">
      <Form.Control type="textarea"placeholder="Enter Address" value={address} onChange={(e)=>setAddress(e.target.value)}  />
    </Col>
  </Form.Group>




  
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">
    Email Address
    </Form.Label>
    <Col sm="7">
      <Form.Control   type="text" placeholder="Enter Email Address" maxLength="10" value={email_address}  onChange={(e)=>setEmailaddress(e.target.value)} />
    </Col>
  </Form.Group>


  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">
    Phone_Number
    </Form.Label>
    <Col sm="7">
      <Form.Control   type="text" placeholder="Enter Phone Number" maxLength="10" value={phone_number} onChange={(e)=>setPhonenumber(e.target.value)} />
    </Col>
  </Form.Group>


  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">
    Username 
    </Form.Label>
    <Col sm="7">
      <Form.Control   type="text" placeholder="Enter Username" maxLength="10" value={username} onChange={(e)=>setUsername(e.target.value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">
    Password 
    </Form.Label>
    <Col sm="7">
      <Form.Control   type="text" placeholder="Enter Password" maxLength="10" value={password} onChange={(e)=>setPassword(e.target.value)} />
    </Col>
  </Form.Group>
                        
                        </Col>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={submitForm}>
                        Update Customer Request
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}