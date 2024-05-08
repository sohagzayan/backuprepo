import React, { FC } from 'react';
import DishesCard from './DishesCard';
import { styles } from '@/constants/styles';
import { Yesteryear } from 'next/font/google';
import Image from 'next/image';
const yesteryear = Yesteryear({
	weight: '400',
	subsets: ['latin'],
});

const dishes = [
	{
		id: 1,
		image: '/theKitchen/dishes/dish1.png',
	},
	{
		id: 2,
		image: '/theKitchen/dishes/dish2.png',
	},
	{
		id: 3,
		image: '/theKitchen/dishes/dish3.png',
	},
	{
		id: 4,
		image: '/theKitchen/dishes/dish4.png',
	},
	{
		id: 5,
		image: '/theKitchen/dishes/dish5.png',
	},
	{
		id: 6,
		image: '/theKitchen/dishes/dish6.png',
	},
	{
		id: 7,
		image: '/theKitchen/dishes/dish7.png',
	},
	{
		id: 8,
		image: '/theKitchen/dishes/dish8.png',
	},
	{
		id: 9,
		image: '/theKitchen/dishes/dish9.png',
	},
	{
		id: 10,
		image: '/theKitchen/dishes/dish10.png',
	},
	{
		id: 11,
		image: '/theKitchen/dishes/dish11.png',
	},
	{
		id: 12,
		image: '/theKitchen/dishes/dish12.png',
	},
];

const Dishes = () => {
	return (
		<div className='text-center py-16 z-10 bg-white text-black'>
			<h1 className={`text-4xl font-bold z-10`}>Our Dishes</h1>
			<div className='flex items-center justify-center flex-wrap w-[80%] mx-auto gap-5 mt-10'>
				{dishes.map((dish) => (
					<Image
						key={dish.id}
						src={dish.image}
						alt='dish'
						width={350}
						height={400}
					/>
				))}
			</div>
		</div>
	);
};

export default Dishes;
