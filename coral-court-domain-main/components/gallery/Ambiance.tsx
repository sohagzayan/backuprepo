import { styles } from '@/constants/styles';
import Image from 'next/image';
import React from 'react';

type Props = {};

const Ambiance = (props: Props) => {
	return (
		<div className='text-center my-10'>
			<h1 className={`${styles.heading} border-white`}>
				Ambiance & Interiors
			</h1>
			<div className='grid grid-cols-2 w-full lg:w-[45%] items-center justify-center mx-auto px-5 text-center mt-10'>
				<h1 className='w-[500] mx-auto text-lg lg:text-2xl font-bold'>
					Our Dining Area
				</h1>
				<Image
					className='rounded-t-[30px] rounded-br-[30px]'
					src='/ambiance1.jpg'
					alt='ambiance'
					width={500}
					height={500}
				/>
				<Image
					className='rounded-l-[30px]'
					src='/ambiance2.png'
					alt='ambiance'
					width={500}
					height={500}
				/>
				<h1 className='w-[500] mx-auto text-lg lg:text-2xl font-bold'>
					Open Kitchen View
				</h1>
				<h1 className='w-[500] mx-auto text-lg lg:text-2xl font-bold'>
					Cozy Corners for Intimate Gatherings
				</h1>
				<Image
					className='rounded-b-[30px] rounded-tr-[30px]'
					src='/ambiance3.png'
					alt='ambiance'
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
};

export default Ambiance;
