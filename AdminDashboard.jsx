import React, { useEffect, useState } from 'react'
import axios from'axios'
import UpdateClothModel from '../components/modal/customer/UpdateCustomerRequesModal';
import UpdateCustomerRequesModal from '../components/modal/customer/UpdateCustomerRequesModal';
import AddCustomerRequest from '../components/modal/customer/addcustomerrequestform';
import DeleteCustomerRequestModel from '../components/modal/customer/DeleteCustomerRequestModel';




export default function AdminDashboard(props) {

    const[customerrequest,setCustomerRequest] = useState([]);

useEffect(()=>{
    getdata();
},[])

    const getdata = () => {
        axios
          .get('http://localhost:5000/customer/')
    
          .then((res) => {
            setCustomerRequest(res.data);
          })
          .catch((err) => {
            console.log(err);
        });
    };

  
  
    
    
    return (
        <div >
           
            <br />
          


          
            <br/>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8">

        
                <br />
    <div  class="btn-group-horizontal d-flex" >
       
   
   
    </div>

<br /><br /><br />
<div style={{background:"grey"}}
>
                    <table className="table" >
                        <thead className="thead-dark">
                            <tr>
                                
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Address</th>
                                <th scope="col">Emailaddress</th>
                                <th scope="col">Phonenumber</th>
                                <th scope="col">Username</th>
                                <th scope="col">Password</th>
                                <th className="text-center" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody style={{color:"white"}}>
                            {customerrequest.map((row)=>(
                            <tr key={row.customer_id}>
                                <td>{row.name}</td>
                                <td>{row.age}</td>
                                <td>{row.address}</td>
                                <td>{row.email_address}</td>
                                <td>{row.phone_number}</td>
                                <td>{row.username}</td>
                                <td>{row.password}</td>
                                <td className="text-center">
                                
                                <DeleteCustomerRequestModel eid={row.customer_id}/>    
                                  
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    

                </div>
            </div>
            </div>
        </div>
    )
}