import { styles } from '@/constants/styles';
import Link from 'next/link';
import React from 'react';

type Props = {};

const NewsLetter = (props: Props) => {
	return (
		<div className='my-10 p-5 lg:p-[100px] lg:px-[300px] w-[80%] lg:w-[60%] border border-[#D23135] mx-auto rounded-[40px] space-y-8 text-center text-black'>
			<h1 className={`${styles.heading} !border-black !text-4xl`}>
				Join Us
			</h1>
			<p className='font-bold text-center text-sm lg:text-base'>
				Embark on a gastronomic adventure with Coral Court. Dive deep
				into the world of Asian food and discover flavors that resonate,
				dishes that inspire, and a culinary culture that&apos;s rich and
				diverse.
			</p>
			{/* <div className='flex flex-col lg:flex-row gap-5 '>
				<input
					className={`${styles.input} bg-transparent border-[#D23135]`}
					type='text'
					placeholder='Name'
				/>
				<input
					className={`${styles.input} bg-transparent border-[#D23135]`}
					type='text'
					placeholder='Email'
				/>
			</div> */}
			<div>
				<Link
					href={'https://chat.whatsapp.com/C2z3SIbt09uBDpZ4wtVX3E'}
					target='_blank'
				>
					<button
						className={` bg-[#D81846] hover:bg-white border border-[#D81846] text-white hover:text-[#D81846] font-bold transition duration-300 ease-in-out px-10 py-3 rounded-2xl`}
					>
						Join Us
					</button>
				</Link>
			</div>
		</div>
	);
};

export default NewsLetter;
