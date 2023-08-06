import React, { useState } from "react";
import LogoImage from "../elements/logo/logoImage";
import { menuItems } from "./headerItems";
import { menu } from "@/assets"
import Image from 'next/image'


const Header = () => {
	const [activeMenuItem, setActiveMenuItem] = useState(null);
	const [showMobile, setShowMobile] = useState(false)

	const handleMenuHover = (itemId: any) => {
		setActiveMenuItem(itemId);
	};

	const handleMenuLeave = () => {
		setActiveMenuItem(null);
	};

	// Function to toggle mobile menu
	const toggleMobileMenu = () => {
		setShowMobile(!showMobile)
	};

	return (
		<nav className=' flex justify-between lg:px-[100px] sm:px-8 px-4  py-6 lg:py-[30px] absolute left-0 right-0 top-0 shadow-md '>
			<a href={"/"}>
				<LogoImage />
			</a>
			<div className=' hidden md:block '>
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

			<div className='md:hidden flex'>
				<button
					className='text-black '
					onClick={toggleMobileMenu}
					aria-label='Mobile Menu Button'>
					<Image src={menu} className=" h-8 w-8 " alt="menu_icon" />
				</button>
			</div>


			{
				showMobile && (<ul
					className='  absolute top-20 right-0 flex-col space-y-4 w-full text-center text-black bg-white p-4 rounded-md'>
					{/* {menuItems.map((item) => (
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
					))} */}

					Mobile Menu Will be here!!!
				</ul>)
			}
		</nav>
	);
};

export default Header;
