import React, { useState } from "react";
import LogoImage from "../elements/logo/logoImage";
import { menuItems } from "./headerItems";

const Header = () => {
	const [activeMenuItem, setActiveMenuItem] = useState(null);

	const handleMenuHover = (itemId: any) => {
		setActiveMenuItem(itemId);
	};

	const handleMenuLeave = () => {
		setActiveMenuItem(null);
	};

	// Function to toggle mobile menu
	const toggleMobileMenu = () => {
		const mobileMenu = document.getElementById("mobile-menu");
		if (mobileMenu) {
			mobileMenu.classList.toggle("hidden");
		}
	};

	return (
		<nav className=' flex justify-between lg:px-[100px] sm:px-8 px-4  py-6 lg:py-[30px] absolute left-0 right-0 top-0 shadow-md '>
			<a href={"/"}>
				<LogoImage />
			</a>
			<div className=' hidden lg:block '>
				<ul className=' flex space-x-6  '>
					{menuItems.map((item) => (
						<li
							className=' p-3 relative '
							key={item.id}
							onMouseEnter={() => handleMenuHover(item.id)}
							onMouseLeave={handleMenuLeave}>
							<a className=' text-black' href={item.url}>
								{item.title}
							</a>
							{item.submenu && item.id === activeMenuItem && (
								<ul className=' absolute top-12 left-10 text-black bg-yellow-200 p-4 rounded-md'>
									{item.submenu.map((subItem: any) => (
										<li className=' w-[100px]' key={subItem.id}>
											<a className=' w-fit' href={subItem.url}>
												{subItem.title}
											</a>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			</div>

			<div className='sm:hidden flex'>
				<button
					className='text-black px-2 py-1'
					onClick={toggleMobileMenu}
					aria-label='Mobile Menu Button'>
					☰
				</button>
			</div>
			<ul
				id='mobile-menu'
				className=' sm:hidden absolute top-20 right-0 flex flex-col space-y-4 w-full text-center text-black bg-white p-4 rounded-md'>
				{menuItems.map((item) => (
					<li className='relative' key={item.id}>
						<a
							className='text-black'
							href={item.url}
							onClick={toggleMobileMenu}>
							{item.title}
						</a>
						{item.submenu && (
							<ul className='text-black bg-yellow-200 p-4 rounded-md'>
								{item.submenu.map((subItem: any) => (
									<li className='w-[100px]' key={subItem.id}>
										<a
											className='w-fit'
											href={subItem.url}
											onClick={toggleMobileMenu}>
											{subItem.title}
										</a>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Header;
