import { styles } from '@/constants/styles';
import Image from 'next/image';
import React from 'react';

type Props = {};

const AboutUs = (props: Props) => {
	return (
		<div className='  space-y-10 '>
			<div className='space-y-4 bg-[#1E0FC8] py-10 text-center'>
				<h1 className={`text-[80px] italic font-bold`}>About Us</h1>
			</div>
			<div className='w-[70%] py-20 flex flex-col lg:flex-row items-center justify-evenly mx-auto space-y-5'>
				<div className='grid grid-cols-12 gap-12 items-center'>
					<div className='w-full col-span-7'>

						<Image src="/coralCourt/hellodrinkbatter.png" style={{ width: "100%", height: "100%" }} sizes='100vw' width={0} height={0} alt='batter' />

					</div>
					<div className='col-span-5'>
						<div>
							<h3 className='border-t border-b border-t-[#E1B168] border-b-[#E1B168] inline-block text-[#1E0FC8] font-bold uppercase '> ABOUT US</h3>
							<h3 className='text-[40px] text-[#1E0FC8] font-bold'>About NICETEA</h3>
							<p className='text-[#555555] font-semibold'>NICETEA is a locally owned and operated Boba Tea Shop serving the community of Richmond, BC. Walk-ins Welcome! You may also order for pick-up or delivery conveniently with Uber Eats. We use fresh fruits, milk, and tea to craft the best beverage to your liking. So stop by today and take advantage of our probiotic juice or juice bar!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
