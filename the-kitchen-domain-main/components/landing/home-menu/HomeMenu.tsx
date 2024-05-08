import Image from 'next/image';
import React from 'react';
import { Yesteryear } from 'next/font/google';
import menu1 from '../../../public/theKitchen/menus/menu1.png';
import menu2 from '../../../public/theKitchen/menus/menu2.png';
import menu3 from '../../../public/theKitchen/menus/menu3.png';
import menu4 from '../../../public/theKitchen/menus/menu4.png';
import menu5 from '../../../public/theKitchen/menus/menu5.png';
import menu6 from '../../../public/theKitchen/menus/menu6.png';
import menu7 from '../../../public/theKitchen/menus/menu7.png';
import menu8 from '../../../public/theKitchen/menus/menu8.png';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';

type Props = {};

const menus = [
	{
		id: 1,
		name: '더 키친 감자튀김 The Kitchen fries',
		startsFrom: 17.25,
		description:
			'Crispy fries loaded with homemade stir fried Kimchi, cheese, and house made mayo sauce',
		img: menu1,
	},
	{
		id: 2,
		name: '떡볶이 Spicy rice cake (L)',
		startsFrom: 24.25,
		description: '',
		img: menu2,
	},
	{
		id: 3,
		name: '뚝배기 불고기 Bulgogi soup',
		startsFrom: 16.65,
		description:
			'Classic Korean marinated beef served in soup form with glass noodle, and veggies  ',
		img: menu3,
	},
	{
		id: 4,
		name: '짬뽕 spicy pork soup (JJambbong)',
		startsFrom: 17.25,
		description: 'Spicy pork soup with prawns, veggies, and glass noodle',
		img: menu4,
	},
	{
		id: 5,
		name: '감자전 (potato pancake)',
		startsFrom: 16.0,
		description: '',
		img: menu5,
	},
	{
		id: 6,
		name: '김치전 (kimchi pancake)',
		startsFrom: 18.65,
		description: '',
		img: menu6,
	},
	{
		id: 7,
		name: '스팸마요 spam mayo rice bowl',
		startsFrom: 14.25,
		description:
			'Pan fried spam rice bowl with house made mayo, egg, stir fried Kimchi',
		img: menu7,
	},
	{
		id: 8,
		name: '제육덮밥 spicy pork rice bowl ($)',
		startsFrom: 15.25,
		description: 'Stir fried spicy pork rice bowl',
		img: menu8,
	},
];

const HomeMenu = (props: Props) => {
	return (
		<div className='bg-white text-black py-[100px]'>
			<div className='flex items-center justify-center mb-10 '>
				<h1 className={` text-2xl md:text-6xl font-bold`}>Menu</h1>
			</div>

			{/* Menu card */}
			<div className='flex flex-wrap w-[80%] mx-auto gap-5'>
				{menus.map((menu) => (
					<div
						key={menu.id}
						className='h-[420px] w-[360px] m-auto rounded-lg flex flex-col justify-between'
					>
						<div className='space-y-5'>
							<div className='flex flex-col items-center justify-center w-full'>
								<Image
									src={menu.img}
									alt='menu image'
									width={370}
									height={270}
								/>
							</div>

							<div className='w-full space-y-3'>
								<div className=''>
									<h1 className='font-bold text-start text-lg'>
										{menu.name}
										<span className='text-[#078348] text-sm'>
											(${menu.startsFrom})
										</span>
									</h1>
									<p className='text-sm'>
										{menu.description}
									</p>
									{/* <h1 className='text-2xl md:text-4xl font-bold'>
									Starts from {menu.startsFrom}$
								</h1> */}
								</div>
							</div>
						</div>
						<div className='hover:translate-y-1 transition'>
							<Link
								href='https://order.chatchefs.com/the-kitchen-3f1ebf4a/2620-sasamat-st-vancouver-bc-v6r-4a8-canada-ca79c1e1'
								target='_blank'
								className='flex items-center gap-1'
							>
								<button className='font-bold '>See more</button>
								<IoMdArrowForward />
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomeMenu;
