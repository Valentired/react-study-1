import React from "react";
import s from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div>
				<a className={s.item} href="/profile">Profile</a>
			</div>
			<div>
				{/* if need to use modifier */}
				<a className={`${s.item} ${s.active}`} href="/dialogs">Messages</a>
			</div>
			<div>
				<a className={s.item} href="/news">News</a>
			</div>
			<div>
				<a className={s.item} href="/music">Music</a>
			</div>
			<div>
				<a className={s.item} href="/settings">Settings</a>
			</div>
		</nav>
	);
};

export default Navbar;