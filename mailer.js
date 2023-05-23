

import React from 'react';
import axios from 'axios';
import "./mailer.css";
import contact from './images/contact2.jpg';


const Mailer = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const feedbackData = {
      Feedbackname: formData.get('name'),
      email2: formData.get('user_email'),
      feedback: formData.get('message')
    };

    axios
      .post('http://localhost:5000/Feedback/addFeedback', feedbackData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
    
 <section className="header3">
                 <nav>
                    
                     <div className="nav-links" id="nav-links">
                     <i className="fa fa-times" onclick="hideMenu()" />
                   <ul>
                   <li><a href="/home">HOME</a></li>
                   <li><a href="/agendas">Request</a></li> 
                   <li><a href="/contact">FeedBack</a></li>
                   <li><a href="/">LOGIN</a></li>  
                  </ul>
                </div>
                  <i className="fa fa-bars" onclick="showMenu()" />
                </nav>
               
                </section>
          

              <img src={contact} alt="contact" className='contactimage'/>

          <div className="container border"
                     style={{marginTop:"-320px",
                             width:'40%',
                             backgroundPosition:'center',
                             backgroundSize:"cover",
                             marginLeft:'800px',
                             
                              
                            }}>
            
                   <center><h1 style={{marginTop:'25px'}}>FeedBack Form</h1></center>
                   <form  className='row' style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
                   <label>name</label>
                  <input type= "text" name="name"  className='form-control'/>
 
                   <label>Email</label>
                   <input type="email" name="user_email" className='form-control' />
 
                 <label>FeedBack</label>
                 <textarea name='message' rows='4' className='form-control' />
                 <input 
                    type='submit' 
                    value='Send' 
                    
                    className='form-control btn btn-primary'
                    style={{marginTop:'30px'}}
                    />
                    

            </form>
           
            
           </div>
         

        
           
           <center>
        <section className="footercontact">
          
         
  
        </section>
      </center>

    </div>
  );
};

export default Mailer;
