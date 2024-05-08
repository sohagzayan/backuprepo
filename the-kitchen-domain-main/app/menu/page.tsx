import HomeMenu from '@/components/landing/home-menu/HomeMenu';
import Category from '@/components/menu/Category';
import Menu from '@/components/menu/Menu';
import React from 'react';

type Props = {};

const MenuPage = (props: Props) => {
	return (
		<div>
			<Menu />
			{/* <Category /> */}
			<HomeMenu />
		</div>
	);
};

export default MenuPage;
