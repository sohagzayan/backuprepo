import { styles } from '@/constants/styles';
import React from 'react';
import Image from 'next/image';
import { Yesteryear } from 'next/font/google';
import Link from 'next/link';
import heroObject from '../../public/theKitchen/heroObject.png';
import { BsTelephone } from 'react-icons/bs';
type Props = {};

const yesteryear = Yesteryear({
	weight: '400',
	subsets: ['latin'],
});

const Gallery = (props: Props) => {
	return (
		<div
			className='relative'
			style={{
				backgroundImage: `url('/theKitchen/heroBg.png')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className='w-[90%] lg:w-[70%] mx-auto flex flex-col  items-center justify-between py-[100px] gap-5'>
				<h1 className='text-4xl lg:text-6xl text-center font-bold uppercase'>
					A Gallery of Culinary <br /> Delights
				</h1>
				<div className='flex flex-col md:flex-row gap-5 lg:justify-start justify-center'>
					<Link
						href='tel:+16042615353'
						className='bg-white  py-2 px-6  rounded-xl  cursor-pointer hover: text-black font-bold text-center   border-2 hover:translate-y-1 transition-all ease-in-out duration-300 flex items-center justify-evenly gap-3'
					>
						<BsTelephone />
						<div className='text-start'>
							<p>+1 604-261-5353</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Gallery;