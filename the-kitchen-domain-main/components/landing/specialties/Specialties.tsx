import React, { FC } from 'react';

import Image from 'next/image';
import special from '../../../public/theKitchen/testimonials.svg';
import object from '../../../public/theKitchen/object2.png';

const Specialties = () => {
	return (
		<div className='flex flex-col items-center justify-center my-16 md:mt-28 relative px-10'>
			<div className='z-10'>
				<h1 className={` text-4xl md:text-5xl font-bold text-center`}>
					{' '}
					Why is{' '}
					<span className='text-[#EE0202]'>
						The Kitchen Express West 10 Ave
					</span>{' '}
					the best?
				</h1>
				<p className='text-center mt-3 text-sm w-[90%] lg:w-[50%] mx-auto'>
					The Kitchen Express emerged from the heartfelt aspiration of
					sharing the rich and flavorful traditions of Vietnamese
					cuisine with a community eager to savor authentic and
					aromatic dishes
				</p>
			</div>
			<div className='mt-20 flex items-center justify-center'>
				<Image src={special} alt='special' />
			</div>
		</div>
	);
};

export default Specialties;
