import React, { FC } from 'react';
import SpecialtiesCard from './SpecialtiesCard';

const specialties = [
	{
		id: 1,
		image: '/coralCourt/specialties/menu1.png',
		name: 'Lunch Special (11:30-15:00)',
		varieties: 8,
	},
	{
		id: 2,
		image: '/coralCourt/specialties/menu2.png',
		name: 'Appetizers',
		varieties: 7,
	},
	{
		id: 3,
		image: '/coralCourt/specialties/menu3.png',
		name: 'BBQ Special',
		varieties: 6,
	},
	{
		id: 4,
		image: '/coralCourt/specialties/menu4.png',
		name: 'Soups',
		varieties: 5,
	},
	{
		id: 5,
		image: '/coralCourt/specialties/menu5.png',
		name: 'Beef',
		varieties: 5,
	},
	{
		id: 6,
		image: '/coralCourt/specialties/menu6.png',
		name: 'Chicken',
		varieties: 5,
	},
	{
		id: 7,
		image: '/coralCourt/specialties/menu7.png',
		name: 'Seafood',
		varieties: 5,
	},
	{
		id: 8,
		image: '/coralCourt/specialties/menu8.png',
		name: 'Egg Foo Young',
		varieties: 5,
	},
	{
		id: 9,
		image: '/coralCourt/specialties/menu9.png',
		name: 'Pork',
		varieties: 5,
	},
	{
		id: 10,
		image: '/coralCourt/specialties/menu10.png',
		name: 'Tofu',
		varieties: 5,
	},
	{
		id: 11,
		image: '/coralCourt/specialties/menu11.png',
		name: 'Vegetables',
		varieties: 5,
	},
	{
		id: 12,
		image: '/coralCourt/specialties/menu12.png',
		name: 'Fried Rice',
		varieties: 5,
	},
	{
		id: 13,
		image: '/coralCourt/specialties/menu13.png',
		name: 'Chow Mein',
		varieties: 5,
	},
	{
		id: 14,
		image: '/coralCourt/specialties/menu14.png',
		name: 'Group Dinner Specials',
		varieties: 5,
	},
	{
		id: 15,
		image: '/coralCourt/specialties/menu15.png',
		name: 'Side Orders',
		varieties: 5,
	},
	{
		id: 16,
		image: '/coralCourt/specialties/menu16.png',
		name: 'Pops',
		varieties: 5,
	},
];

const Specialties = () => {
	return (
		<div className='flex flex-col items-center justify-center my-16'>
			<div className='text-3xl text-black md:text-4xl font-bold'>
				Our Specialties
			</div>
			<div
				className='max-w-[80%] flex flex-wrap items-center justify-center gap-5 m-10
      '
			>
				{specialties.map((specialty: any, index: any) => (
					<SpecialtiesCard
						key={index}
						image={specialty.image}
						name={specialty.name}
						varieties={specialty.varieties}
					/>
				))}
			</div>
		</div>
	);
};

export default Specialties;
