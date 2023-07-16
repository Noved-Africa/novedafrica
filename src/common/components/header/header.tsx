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
	return (
		<nav className=' flex justify-between px-[100px] py-[30px] absolute left-0 right-0 top-0 shadow-md '>
			<a href={"/"}>
				<LogoImage />
			</a>
			<div>
				<ul className=' flex space-x-6  '>
					{menuItems.map((item) => (
						<li
							className=' p-3 relative '
							key={item.id}
							onMouseEnter={() => handleMenuHover(item.id)}
							onMouseLeave={handleMenuLeave}>
							<a className=" text-black" href={item.url}>{item.title}</a>
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
		</nav>
	);
};

export default Header;
