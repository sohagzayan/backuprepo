import { Caveat, Yesteryear } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import aboutImg from '../../../public/theKitchen/aboutUs.png';

type Props = {};
const yesteryear = Yesteryear({
	weight: '400',
	subsets: ['latin'],
});

const HomeAbout = (props: Props) => {
	return (
		<div className='mt-20'>
			<div>
				<h1
					className={`${yesteryear.className} text-2xl md:text-6xl font-bold text-center`}
				>
					About us
				</h1>
			</div>
			<Image src={aboutImg} alt='about image' />
		</div>
	);
};

export default HomeAbout;
