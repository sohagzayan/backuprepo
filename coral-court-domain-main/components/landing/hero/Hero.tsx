import React from 'react';
import Image from 'next/image';
import { styles } from '@/constants/styles';

type Props = {};

const Hero = (props: Props) => {
	return (
		<div className='bg-[#1E0FC8]'>
			<div className='w-full lg:w-[60%] mx-auto flex flex-col lg:flex-row items-center justify-between py-[5px] gap-5'>
				<div className='w-1/2'>
					<div className='space-y-5'>
						<h1 className='text-4xl lg:text-8xl text-center lg:text-start font-bold italic'>
							Welcome to <br />{' '}
							Nice Tea
						</h1>
						<p className=' w-full  text-center lg:text-start text-[15px]'>
							your friendly neighborhood bubble tea shop in Richmond, BC. We provide a variety of premium handcrafted drinks that you{"'"}ll love.
						</p>
						<div className='flex flex-col md:flex-row gap-5'>
							<a
								href='https://order.chatchefs.com/coral-court-c14ef1f2/137-2nd-st-e-north-vancouver-bc-v7l1c2-canada-49e9934a'
								className='bg-transparent py-2 px-6  rounded-xl capitalize cursor-pointer text-[#ffffff] font-bold text-center hover:bg-[#D81846]  border-2 border-[#E1B168] hover:border-[#F9EE15] hover:text-white transition-all ease-in-out duration-300'
							>
								View Menu
							</a>

						</div>
					</div>
				</div>
				{/* <div className='items-center justify-center mx-auto w-1/2'> */}
				<Image
					src='/coralCourt/hero_image.png'
					alt='hero'
					width={600}
					height={400}
					className=' block bg-none m-0 p-0 hero_orientation'
				/>
				{/* </div> */}
			</div>
		</div>
	);
};

export default Hero;
