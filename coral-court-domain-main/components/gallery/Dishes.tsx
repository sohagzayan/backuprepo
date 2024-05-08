import React, { FC } from 'react';
import DishesCard from './DishesCard';
import { styles } from '@/constants/styles';

const specialties = [
	{
		id: 1,
		image: '/coralCourt/dish/dish1.png',
		name: 'Signature Fried Chicken Skewers',
	},
	{
		id: 2,
		image: '/coralCourt/dish/dish2.png',
		name: 'Snowflake Marbled Beef Bibimbap',
	},
	{
		id: 3,
		image: '/coralCourt/dish/dish3.png',
		name: 'Creamy Cheesy Salmon Ramen',
	},
	{
		id: 4,
		image: '/coralCourt/dish/dish4.png',
		name: 'Cold Noodle with Signature Fried Chicken',
	},
	{
		id: 5,
		image: '/coralCourt/dish/dish5.png',
		name: 'Special Spicy Fried Chicken',
	},
	{
		id: 6,
		image: '/coralCourt/dish/dish6.png',
		name: 'Special Spicy Fried Chicken',
	},
	{
		id: 7,
		image: '/coralCourt/dish/dish7.png',
		name: 'Special Spicy Fried Chicken',
	},
	{
		id: 8,
		image: '/coralCourt/dish/dish8.png',
		name: 'Special Spicy Fried Chicken',
	},
	{
		id: 9,
		image: '/coralCourt/dish/dish9.png',
		name: 'Special Spicy Fried Chicken',
	},
	{
		id: 10,
		image: '/coralCourt/dish/dish10.png',
		name: 'Special Spicy Fried Chicken',
	},
	{
		id: 11,
		image: '/coralCourt/dish/dish11.png',
		name: 'Special Spicy Fried Chicken',
	},
	{
		id: 12,
		image: '/coralCourt/dish/dish12.png',
		name: 'Special Spicy Fried Chicken',
	},
];

const Dishes = () => {
	return (
		<div className='flex flex-col items-center justify-center my-16'>
			<div
				className={`${styles.heading} uppercase tracking-widest !border-[#D23135] text-[#D23135]`}
			>
				Our Dishes
			</div>
			<div
				className='max-w-[50%] flex flex-wrap items-center justify-center gap-5 my-10
      '
			>
				{specialties.map((specialty: any, index: any) => (
					<DishesCard
						key={index}
						image={specialty.image}
						name={specialty.name}
					/>
				))}
			</div>
		</div>
	);
};

export default Dishes;
