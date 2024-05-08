import Link from 'next/link';
import React from 'react';

type Props = {};

const Planning = (props: Props) => {
	return (
		<div
			className='py-10 lg:px-[300px] lg:py-[150px] text-center lg:text-start'
			style={{
				backgroundImage: "url('/planningBG.jpg')",
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className='w-full lg:w-[50%] space-y-5 mx-auto lg:mx-0'>
				<h1 className='font-bold text-4xl'>Planning an Event?</h1>
				<p>
					Our space is perfect for gatherings, celebrations, and
					events. Reach out to us to know more!
				</p>
				<Link
					href={'https://chat.whatsapp.com/C2z3SIbt09uBDpZ4wtVX3E'}
					target='_blank'
				>
					<button className='bg-[#FFE501] text-black font-bold py-2 px-7 rounded-xl mt-5'>
						Contact Us
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Planning;
