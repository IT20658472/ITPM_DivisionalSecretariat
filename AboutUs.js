import React from 'react'
import NavbarLogin from './NavBar_login'
import '../Styles/AboutUs.css'

function AboutUs() {
  return (
    <div className='aboutUs'>
        <NavbarLogin />
        <p>Welcome to our website! The Sri Lankan Divisional Secretariat Service is an administrative system in Sri Lanka that operates at the divisional level. It provides various public services and functions as a link between the central government and the local communities.

In recent years, the Divisional Secretariat Service has been moving towards providing online services to enhance efficiency and convenience. The online platform allows citizens to access and request services, such as obtaining birth certificates, marriage certificates, land deeds, and permits, without the need to visit the physical divisional secretariat office.

Through the online system, individuals can submit applications, track the progress of their requests, and receive notifications regarding their applications. This digitalization effort aims to streamline processes, reduce paperwork, and improve accessibility to government services for the public.

Overall, the online Divisional Secretariat Service in Sri Lanka facilitates citizen-government interactions, simplifies administrative procedures, and promotes transparency and efficiency in public service delivery.</p>
    </div>
  )
}

export default AboutUs
