import { styles } from '@/constants/styles';
import Image from 'next/image';
import React from 'react';

type Props = {};

const Menu = (props: Props) => {
	return (
		<div className='my-16 mx-5 text-center space-y-5'>
			<h1 className={`${styles.heading} border-white`}>Menu</h1>
			<Image
				className='mx-auto rounded-xl'
				src='/menu.png'
				alt='menu'
				width={1000}
				height={1000}
			/>
		</div>
	);
};

export default Menu;
