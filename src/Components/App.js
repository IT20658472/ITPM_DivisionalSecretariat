import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import React, { Component } from "react";

import "./App.css";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";
import Register from "./Components/Register";

import HotelSearch from "./Components/HotelSearch";

import HotelRegister from "./Components/HotelRegister";





















// import SlideShow from "./Components/SlideShow";




import ActivityRegister from "./Components/ActivityRegister";



import HomepageAdmin from "./Components/HomepageAdmin";








import Edithotel from "./Components/Edit.Hotel";
import PageNotFound from "./Components/PageNotFound";
import AdminTenderView from "./Components/AdminTenderView";
import AddTender from "./Components/AddTender";






import Editregister from "./Components/Edit.register";







import AdvaticementOdersview from "./Components/AdvaticementOdersview";


















  
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Features from "./Components/Features";
import HomepageNormal from "./Components/HomepageNormal";

import festivalsHomepage from "./Components/Festivals";

// import Refund from "./Components/Refund";
class App extends Component {
	render() {
		return (

			<div>
				<Router>
					<Switch>
						<Route exact path='/' component={HomepageNormal} />
						<Route path='/Login' component={Login} />
						<Route  path='/Homepage/:id' component={Homepage} />
						
						<Route  path='/Register' component={Register} />
						
			
						<Route path='/HotelSearch' component={HotelSearch} />
						
						
					
					
						
					
						
					
						
						
					
						
						
						
						
					
						<Route path='/ActivityRegister' component={ActivityRegister} />
						
						
						<Route path='/Hotelregister' component={HotelRegister} />
					
						<Route path='/HomepageAdmin' component={HomepageAdmin} />

					
					

						
						
					
					
						
					
					
						<Route path='/PageNotFound' component={PageNotFound} />
					
					
						
						

						<Route path='/edithotel/:id' component={Edithotel} />
						<Route path='/AdminTenderView' component={AdminTenderView} />
						<Route path='/AddTender' component={AddTender} />

						
						

						

						
						
						
						  

						
						

					

						<Route path='/Editregister/:id' component={Editregister} />
						
						
					
						
					
				
						<Route path='/aboutus' component={AboutUs} />
						<Route path='/contactus' component={ContactUs} />
						<Route path='/features' component={Features} />
					


					
						

						
			
						
						<Route path='/AdvaticementOdersview' component={AdvaticementOdersview} />
						
						
					
						
					

					
						
						
						
	
						<Route path='/festivals' component={festivalsHomepage} />
												
						<Route path="/404" component={PageNotFound} />

						

						{/* <Redirect from='*' to='/404' /> */}
								
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
