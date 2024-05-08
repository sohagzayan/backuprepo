import { styles } from '@/constants/styles';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const HomeGallery = (props: Props) => {
	return (
		<div className='text-center bg-[#D81846] py-16 '>
			<h1
				className={`${styles.heading} uppercase tracking-widest   lg:!text-4xl`}
			>
				Gallery
			</h1>
			<div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-full md:w-[60%] mx-auto items-center justify-center px-5  my-16 transition-all ease-in-out'>
				<Image
					className='col-span-2'
					src='/coralCourt/gallery/gallery1.png'
					alt='image'
					width={1000}
					height={1000}
				/>
				<Image
					src='/coralCourt/gallery/gallery2.png'
					alt='image'
					width={700}
					height={700}
				/>
				<Image
					src='/coralCourt/gallery/gallery3.png'
					alt='image'
					width={700}
					height={700}
				/>
				<Image
					src='/coralCourt/gallery/gallery4.png'
					alt='image'
					width={700}
					height={700}
				/>
				<Image
					src='/coralCourt/gallery/gallery5.png'
					alt='image'
					width={700}
					height={700}
				/>
				<Image
					className='col-span-2'
					src='/coralCourt/gallery/gallery6.png'
					alt='image'
					width={1000}
					height={1000}
				/>
			</div>

			<div>
				<Link
					href={
						'https://order.chatchefs.com/coral-court-c14ef1f2/137-2nd-st-e-north-vancouver-bc-v7l1c2-canada-49e9934a'
					}
					target='_black'
				>
					<button className='text-[10px] md:text-base py-3 px-5 border border-[#F9EE15] md:border-[3px]  text-black rounded-xl mt-4 bg-white font-bold'>
						View More
					</button>
				</Link>
			</div>
		</div>
	);
};

export default HomeGallery;
