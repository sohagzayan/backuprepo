import Image from 'next/image';
import React from 'react';

type Props = {};

const Testimonials = (props: Props) => {
	return (
		<div className='w-full  mx-auto bg-white rounded-xl h-auto text-black px-6 lg:px-0 my-10'>
			<div className='text-center'>
				<h1 className='text-xl text-[#D23135] md:text-3xl font-bold pt-2 pb-16'>
					Testimonials
				</h1>
			</div>
			<div className='flex items-center justify-center py-3'>
				<Image
					src='/coralCourt/testimonials.svg'
					alt='testimonials'
					width={1000}
					height={1000}
				/>
			</div>
		</div>
	);
};

export default Testimonials;
