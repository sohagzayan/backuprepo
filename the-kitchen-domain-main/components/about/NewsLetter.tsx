import { styles } from '@/constants/styles';
import { Yesteryear } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import image from '../../public/theKitchen/locationBanner.png';
import Link from 'next/link';

type Props = {};

const yesteryear = Yesteryear({
	weight: '400',
	subsets: ['latin'],
});

const NewsLetter = (props: Props) => {
	return (
		<div
			className='flex items-center justify-center w-full mx-auto'
			style={{
				backgroundImage: `url('/theKitchen/newsletterBg.png')`,
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className='flex flex-col lg:flex-row items-center justify-between gap-10 py-10'>
				<Image src={image} alt='image' className='w-[600px]' />
				<div className='my-10 p-5 m-4 lg:m-0 max-w-[600px] h-auto border mx-auto rounded-[30px] space-y-8 '>
					<h1 className={`text-2xl md:text-4xl font-bold`}>
						Join Us
					</h1>
					<p className='text-sm lg:text-base'>
						Embark on a gastronomic adventure with The Kitchen. Dive
						deep into the world of Korean food and discover flavors
						that resonate, dishes that inspire, and a culinary
						culture that&apos;s rich and diverse.
					</p>
					<div className=''>
						<Link
							href='https://chat.whatsapp.com/B9X0hHuY6qIJGDHZw5NcPf'
							target='_blank'
							className='bg-white hover:bg-black border-2 border-white text-black hover:text-white rounded-2xl px-6 py-3 font-bold transition duration-300'
						>
							Join Us
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
