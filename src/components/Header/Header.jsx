import React from 'react';
import s from './Header.module.css';

const Header = () => {
	return(
		<header className={s.header}>
			<img
				className={s.header__img}
				src="https://i.pinimg.com/736x/b0/3d/4e/b03d4eb07c100ed92f7d77d707c4d9c6--logo-competition-simple-logos.jpg"
			/>
		</header>
	);
};

export default Header;