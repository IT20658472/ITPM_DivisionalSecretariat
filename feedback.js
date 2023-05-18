import React from 'react';
import emailjs from 'emailjs-com'
import "./feedback.css";

import contact from './images/FeedBack.jpg';
import agent from './images/agent1.jpg';





const Mailer = props =>{

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_8f8h2vo',
            'template_fbn4o6h',
             e.target,
            'a-zVyymv-rSbBmaK1'
            ).then(res=>{
                   console.log(res);
            }).catch(err=>console.log(err));
        
    }

   
        return ( 
                  <div>

<section className="header3">
                 <nav>
                    
                    <div className="nav-links" id="nav-links">
                    <i className="fa fa-times" onclick="hideMenu()" />
                  <ul>
                  <li><a href="/home">HOME</a></li>
                  <li><a href="/agendas">AGENDAS</a></li> 
                  <li><a href="/contact">CONTACT</a></li>
                  <li><a href="/">LOGIN</a></li>  
                 </ul>
               </div>
                  <i className="fa fa-bars" onclick="showMenu()" />
               </nav>
               <h1>Add Feedback</h1>
               </section>
         <div class="row">
               <div class="column">
                     
                     <div className='panel'>
                     <h2>Give Feedback </h2><br/>
                     <div className='agent'>
                     <img src={agent} alt="contact" className='ag'/>
                     <p><b>Kumarasingha I.M.K.B.G.J.D</b><br/>Kumaranigha@gmail.com</p>
                     </div>
                     
                     
                     </div>

                     <div class="contact-col">
                         <i class="fa fa-home fa-lg"></i>
		                <div>
		                     <p> XZA Road,ABC Kandy<br/>
			                       bkshdf,,agsagul ,sl</p>
		               </div>
		                    <i class="fa fa-phone  fa-lg"></i>
		                <div>
		                     <p>+94787810604<br/>
			                       Monday to sunday 10 am to 6pm</p>
		                </div>
		                    <i class="fa fa-envelope-o  fa-lg"></i>
		                 <div>
		                      <p>Intro@abc.com<br/>
			                       email us your quary</p>
		                 </div>
                     </div>
                  </div>
             </div>

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
 
                 <label>Message</label>
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
          <h4>About US</h4>
         
          <p>Made <i className="fa fa-heart-o" /> by Kumaranigha I.M.K.B.G.J.D</p>
        </section>
      </center>
           </div>
        
        




        );
    
}

export default Mailer;