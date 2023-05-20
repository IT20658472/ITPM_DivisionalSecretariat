import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import { MDBCol } from 'mdb-react-ui-kit';
import swal from 'sweetalert';

export default function AddCustomerRequestform(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);
  
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
  
  async function handleSubmit(e){
    
    e.preventDefault();
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

    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      
      try {
         await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {
        alert(err)
      }
    }


     // Validation 
   
        if(customer_id.length === 0 ||name.length === 0 || age.length === 0 || gender.length === 0 ||address.length === 0 || email_address.length === 0  || phone_number.length === 0 || username.length === 0 || password.length === 0 ){
              swal(" Fields Cannot empty !","Please enter all data !", "error");
            }  
          else{
            console.log(customerrequestData);
            axios.post('http://localhost:5000/customer/add', customerrequestData)
            .then(function (response) {
              console.log(response.data);
              setCustomerID('');
              setName('');
              setAge('');
              setGender('');
              setAddress('');
              setEmailaddress('');
              setPhonenumber('');
              setUsername('');
              setPassword('');
             
              swal({ text: "Successfully Added", icon: "success", button: "Okay!" })
              .then((value) => {
                window.location = '/customerrequestview';
            });
            })
            .catch(function (error) {
              console.log(error);
              
            });
            
        
          swal({ text: "Successfully Added", icon: "success", button: "Okay!"})
          .then((value) => {
            window.location = '/customerrequestview'+ customer_id; 
         });
        }   
   }
  

  return (
    <>
    
      <Button className="btn-dashb me-5" variant="primary" onClick={handleShow}>
      Adding Details
      </Button>

      <Modal show={show}        
        size="lg"
        centered
        
      >
        <Modal.Header>
        <div class="col-md-12 text-center">
          <Modal.Title id="contained-modal-title-vcenter">Add Customer Request</Modal.Title>
         </div> 
        </Modal.Header>
     
        <Modal.Body>

        


  <Form onSubmit={handleSubmit}>
  
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
      <Form.Control type="text" placeholder="Enter Customer Id " value={customer_id} onChange={(e)=>setCustomerID(e.target.value)}/>
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
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      
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
      <Form.Control   type="text" placeholder="Enter Email Address"  value={email_address}  onChange={(e)=>setEmailaddress(e.target.value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">
    Phone Number
    </Form.Label>
    <Col sm="7">
      <Form.Control   type="text" placeholder="Enter Phone Number" maxLength="10" value={phone_number} onChange={(e)=>setPhonenumber(e.target.value)} />
    </Col>
  </Form.Group>

  
  </Col>
</Form>


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

  



      </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" type="submit" onClick={handleSubmit} style={{height:"40px", width:"20%"}}>
            Submit
          </Button>
          <Button variant="danger" onClick={handleClose} style={{height:"40px", width:"20%"}}>
            Cancel
          </Button> 
        
        </Modal.Footer>
      </Modal>
    </>
  );
}