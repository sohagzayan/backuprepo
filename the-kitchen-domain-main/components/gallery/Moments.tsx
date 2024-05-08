import { styles } from '@/constants/styles';
import { Yesteryear } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

type Props = {};

const yesteryear = Yesteryear({
	weight: '400',
	subsets: ['latin'],
});

const Moments = (props: Props) => {
	return (
		<div className='text-center py-16 '>
			<h1
				className={`${yesteryear.className} text-2xl md:text-6xl font-bold`}
			>
				The Kitchen
			</h1>
			<div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-full md:w-[60%] mx-auto items-center justify-center px-5  my-16 transition-all ease-in-out'>
				<Image
					className='col-span-2'
					src='/theKitchen/grid/grid1.png'
					alt='image'
					width={1000}
					height={1000}
				/>
				<Image
					src='/theKitchen/grid/grid2.png'
					alt='image'
					width={700}
					height={700}
				/>
				<Image
					src='/theKitchen/grid/grid3.png'
					alt='image'
					width={700}
					height={700}
				/>
				<Image
					src='/theKitchen/grid/grid4.png'
					alt='image'
					width={700}
					height={700}
				/>
				<Image
					src='/theKitchen/grid/grid5.png'
					alt='image'
					width={700}
					height={700}
				/>
				<Image
					className='col-span-2'
					src='/theKitchen/grid/grid6.png'
					alt='image'
					width={1000}
					height={1000}
				/>
			</div>
		</div>
	);
};

export default Moments;
