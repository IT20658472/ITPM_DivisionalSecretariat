import React, { Component } from "react";
import "../Styles/Homepage.css";
import Slider from "./Slider";
import NavBarLogin from "./NavBar_login";
 import Footer from "./Footer";
import Slideshow from "./SlideShow";
import logo from "../images/logo (2).png";
import image from "../images/profile-photo.png";

export default class Homepage extends Component {

	render() {
	return (
		<div className='homePageNormal'>

{/* <div className='vehiclePage'> */}
				{/* <NavBarHome /> */}
				<NavBarLogin />
			
			<Slideshow />
			<div className='container'>
				<div className='left-1'>
					<h2>
						Our Vison <span>Kaduwela Divisional Secretariat</span>{" "}
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						faucibus ex eget turpis feugiat, vel placerat elit eleifend.
						Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
						purus tincidunt, volutpat risus ut, dictum lacus.
					</p>
					<button className='details-button'>more details{">>"}</button>
				</div>
				<div className='middle-1'>
					<div className='image-container'>
						<img
							src='https://i0.wp.com/www.satipasala.org/wp-content/uploads/2020/10/Sati-Pasala-Program-at-Divisional-Secretariat-Dompe-23.jpg?ssl=1'
							alt='placeholder'
							className='image'
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>

					<div className='image-container'>
						<img
							src='https://ciaboc.gov.lk/images/news/2023/01/0130/03/1_1.jpg'
							alt='placeholder'
							className='image'
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>
				</div>
				<div className='right-1'>
					<div className='image-container'>
						<img
							src='https://www.cgihambantota.gov.in/webImage/1628233419_2.jpg'
							alt='placeholder'
							className='image'
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>

					<div className='image-container'>
						<img
							src='https://pbs.twimg.com/media/E6iwaTSVoAAuk4-?format=jpg&name=large'
							alt='placeholder'
							className='image'
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>
				</div>
				
		</div>
	
			</div>

			
		
	);
	
}
}
