import Image from 'next/image';
import React from 'react';
import testimonial from '../../../public/theKitchen/testimonials.svg';

type Props = {};

const Testimonials = (props: Props) => {
	return (
		<div className='w-full  mx-auto bg-white rounded-xl h-auto text-black px-6 lg:px-0 my-10'>
			<div className='text-center'>
				<h1 className='text-xl md:text-2xl font-bold pt-2'>
					Testimonials
				</h1>
			</div>
			<div className='flex items-center justify-center py-3'>
				<Image
					src={testimonial}
					alt='testimonials'
					width={900}
					height={900}
				/>
			</div>
		</div>
	);
};

export default Testimonials;
