import { styles } from '@/constants/styles';
import Image from 'next/image';
import React from 'react';

type Props = {};

const data = [
	{
		id: 1,
		image: '/Icon.svg',
		title: 'Authenticity at its Core',
		description:
			'Our dishes are crafted with traditional recipes passed down through generations, ensuring an authentic taste in every bite.',
	},
	{
		id: 2,
		image: '/Icon1.svg',
		title: 'Innovative Creations',
		description:
			'While we cherish tradition, we are not afraid to innovate. Our chefs continuously experiment to bring contemporary twists to classic dishes.',
	},
	{
		id: 3,
		image: '/Icon2.svg',
		title: 'Quality Ingredients',
		description:
			'We source the finest ingredients, ensuring that our dishes are not only flavorful but also wholesome and nutritious.',
	},
	{
		id: 4,
		image: '/Icon3.svg',
		title: 'A Warm Ambiance',
		description:
			'Our restaurant is designed to offer a cozy and welcoming atmosphere, making every visit a memorable experience.',
	},
];

const WhyChooseUs = (props: Props) => {
	return (
		<div
			className='h-auto w-full'
			style={{
				backgroundImage: `url('/coralCourt/chooseBg.png')`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
		>
			<div className='backdrop-filter backdrop-blur-xl py-10'>
				<div className='text-center '>
					<h1 className={`${styles.heading} !text-4xl border-white`}>
						Why Choose Coral Court?
					</h1>
				</div>
				<div className='flex flex-col lg:flex-row items-center justify-evenly gap-5 w-[60%] mx-auto pt-10'>
					{data.map((item) => (
						<div
							key={item.id}
							className='flex flex-col items-center justify-center space-y-5 text-center'
						>
							<Image
								src={item.image}
								alt={item.title}
								width={50}
								height={50}
							/>
							<h1>{item.title}</h1>
							<p>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
