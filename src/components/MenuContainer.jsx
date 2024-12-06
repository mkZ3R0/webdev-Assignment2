import React from "react";
import MenuItem from "./MenuItem";
import  menuItems from "../assets/menu";


const MenuContainer = () => {
	return (
		<section id="menu" className="menu section py-12 bg-white">
			<div className="container mx-auto text-center mb-12 max-w-screen-xl">
				<h2 className="text-4xl font-bold mb-4">Menu</h2>
				<p className="text-lg text-gray-600">Check Our Tasty Menu</p>
			</div>

			<div className="container mx-auto max-w-screen-xl">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
					{menuItems.map((item, index) => (
						<MenuItem
							key={index}
							name={item.name}
							price={item.price}
							ingredients={item.ingredients}
							image={item.image}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default MenuContainer;