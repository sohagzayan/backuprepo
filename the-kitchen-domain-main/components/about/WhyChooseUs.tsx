import { styles } from '@/constants/styles';
import { Yesteryear } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

type Props = {};

const data = [
	{
		id: 1,
		image: '/icon1.png',
		title: 'Authentic Beginnings',
		description:
			'The Kitchen Korean Food fulfills a dream, sharing homemade, genuine Korean recipes.',
	},
	{
		id: 2,
		image: '/icon2.png',
		title: 'Menu Mastery',
		description:
			'Indulge in the most traditional Korean entrees outside of Korean; a culinary experience like no other.',
	},

	{
		id: 3,
		image: '/icon3.png',
		title: 'Enchanting Atmosphere',
		description:
			'Feel the magic upon entry, whether dining in, taking out, or catering—our commitment is quality.',
	},
	{
		id: 4,
		image: '/icon4.png',
		title: 'Customer Delight',
		description:
			'Happy guests are our priority. Your smiles reflect our belief: a satisfied customer is lifelong.',
	},
];

const WhyChooseUs = (props: Props) => {
	return (
		<div className='h-auto w-full py-10 px-10 bg-white text-black'>
			<div className='text-center'>
				<h1 className={` text-4xl font-bold`}>Why The Kitchen?</h1>
			</div>
			<div className='flex flex-col lg:flex-row items-center justify-evenly gap-5 mx-auto pt-10'>
				{data.map((item) => (
					<div
						key={item.id}
						className='flex flex-col  justify-center space-y-5  border rounded-2xl p-5 !w-[350px] h-[250px] z-10 hover:border-2  hover:transition hover:duration-300 hover:ease-in-out hover:shadow-xl'
					>
						<Image
							src={item.image}
							alt={item.title}
							width={50}
							height={50}
						/>
						<h1 className='font-bold'>{item.title}</h1>
						<p>{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default WhyChooseUs;
