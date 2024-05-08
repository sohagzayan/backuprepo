import { styles } from '@/constants/styles';
import Image from 'next/image';
import React from 'react';

type Props = {};

const Philosophy = (props: Props) => {
	return (
		<div className='w-[70%] flex flex-col lg:flex-row items-center justify-evenly mx-auto space-y-5 text-black py-10'>
			<div>
				<Image
					className='rounded-2xl'
					src='/coralCourt/aboutBanner.jpg'
					alt='philosophy'
					width={450}
					height={450}
				/>
			</div>
			<div className='w-full lg:max-w-[50%] mx-auto space-y-3'>
				<h1 className={`${styles.heading} !border-black !text-4xl`}>
					About Us
				</h1>
				<div className=''>
					<h1
						className={`${styles.heading} !border-black !text-[14px] !tracking-[5px] uppercase`}
					>
						Type: Asian, Chinese, Fast Food
					</h1>
				</div>

				<p>
					Features: Casual Dining, Cheap Eats, Family Dining, Free
					Parking, Lunch, Open on Sunday, Take Out, Online Ordering,
					Full Dinner Menu, Wheelchair Accessible
				</p>
			</div>
		</div>
	);
};

export default Philosophy;
