import React from 'react';
// Images
import Logo from '../assets/logo.svg'

const Header = () => {
	return (
		<header className="py-8">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					{/* Logo */}
					<a href="#home">
						<img src={Logo} alt="" />
					</a>

					{/* Button */}
					<button className="btn btn-sm">Work with me</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
