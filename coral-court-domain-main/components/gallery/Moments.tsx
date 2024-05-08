import { styles } from '@/constants/styles';
import Image from 'next/image';
import React from 'react';

type Props = {};

const Moments = (props: Props) => {
	return (
		<div className='text-center bg-[#D81846] py-16 '>
			<h1
				className={`${styles.heading} uppercase tracking-widest   lg:!text-4xl`}
			>
				Coral Court
			</h1>
			{/* <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-full md:w-[60%] mx-auto items-center justify-center px-5  my-16 transition-all ease-in-out'>
				<Image
					className='col-span-2'
					src='/coralCourt/moments/grid1.png'
					alt='image'
					width={1000}
					height={1000}
				/>
				<Image
					src='/coralCourt/moments/grid2.png'
					alt='image'
					width={700}
					height={700}
				/>
				<Image
					src='/coralCourt/moments/grid3.png'
					alt='image'
					width={700}
					height={700}
				/>
				<Image
					src='/coralCourt/moments/grid4.png'
					alt='image'
					width={700}
					height={700}
				/>
				<Image
					src='/coralCourt/moments/grid5.png'
					alt='image'
					width={700}
					height={700}
				/>
				<Image
					className='col-span-2'
					src='/coralCourt/moments/grid6.png'
					alt='image'
					width={1000}
					height={1000}
				/>
			</div> */}
			<div className='flex items-center justify-center'>
				<Image
					className=' mt-10 rounded-2xl'
					src='/coralCourt/moments/moments.jpg'
					alt='image'
					width={1000}
					height={1000}
				/>
			</div>
		</div>
	);
};

export default Moments;
