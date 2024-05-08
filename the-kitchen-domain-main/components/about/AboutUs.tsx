import Image from 'next/image';
import React from 'react';
import aboutBanner2 from '../../public/theKitchen/aboutUsBanner2.png';
import object2 from '../../public/theKitchen/object2.png';
import object3 from '../../public/theKitchen/object3.png';

type Props = {};

const AboutUs = (props: Props) => {
	return (
		<div className='flex flex-col lg:flex-row items-center justify-evenly mx-auto space-y-5 gap-10 py-10 bg-white text-white'>
			<div className='bg-black w-full flex flex-col lg:flex-row items-center justify-between gap-5'>
				<div className='w-[90%] lg:w-[50%] lg:pl-[200px] space-y-5 pt-5 lg:pt-0'>
					<h1 className='text-4xl font-bold'>About Us</h1>
					<p className='text-justify'>
						Welcome to The Kitchen, your go-to Korean restaurant for
						an authentic culinary experience! We&apos;re dedicated
						to bringing the vibrant flavors of Korea to your table.
						From sizzling BBQ to savory bibimbap, our diverse menu
						caters to all tastes. Join us for a memorable dining
						experience where every dish is crafted with care and
						served with warmth.
					</p>
				</div>
				<div className='w-full lg:w-[50%] flex justify-end'>
					<Image
						src={'/theKitchen/aboutUsBanner.png'}
						alt='banner'
						width={700}
						height={700}
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
