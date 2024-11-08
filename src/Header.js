// src/Header.js
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = ({ openSidebar }) => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between bg-white shadow-md h-16 px-4">
			<div className="flex items-center space-x-4">
				{/* 뒤로가기 버튼 */}
				{location.pathname !== "/" && (
					<button
						onClick={() => navigate(-1)}
						className="text-gray-700 focus:outline-none"
					>
						Back
					</button>
				)}
				<h1>
					<Link to="/" className="text-gray-900 font-bold">
						MS
					</Link>
				</h1>
			</div>
			<ul className="flex items-center space-x-4">
				<li>
					<button
						onClick={() => openSidebar(false)}
						className="text-gray-700 focus:outline-none"
					>
						References
					</button>
				</li>
				<li>
					<button
						onClick={() => openSidebar(true)}
						className="text-gray-700 focus:outline-none"
					>
						Blog
					</button>
				</li>
				<li>
					<button
						onClick={() => openSidebar(true)}
						className="text-gray-700 p-2 rounded focus:outline-none"
					>
						<Bars3Icon className="w-6 h-6" />
					</button>
				</li>
			</ul>
		</header>
	);
};

export default Header;