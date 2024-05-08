import { styles } from '@/constants/styles';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Feedback = (props: Props) => {
	return (
		<div className='w-[90%] lg:w-[50%] mx-auto py-10 space-y-8 text-black'>
			{/* <div className='space-y-5 text-center'>
				<h1 className='font-bold text-3xl'>Feedback & Reservation</h1>
				<p>
					We value your feedback! If you have dined with us recently,
					let us know how we did. Looking to book a table? Give us a
					call or fill out the form below:
				</p>
			</div> */}
			{/* <div className='space-y-5'>
				<div className='flex gap-5'>
					<input
						className={`${styles.input} border-black`}
						type='text'
						placeholder='Name'
					/>
					<input
						className={`${styles.input} border-black`}
						type='email'
						placeholder='Email'
					/>
				</div>
				<div className='flex gap-5'>
					<input
						className={`${styles.input} border-black`}
						type='text'
						placeholder='Subject'
					/>
					<input
						className={`${styles.input} border-black`}
						type='text'
						placeholder='Phone'
					/>
				</div>
				<div>
					<textarea
						className='w-full text-black  outline-none mt-[10px] rounded-xl border bg-transparent p-5 lg:p-8 border-black'
						name='Message'
						placeholder='Message'
						rows={4}
					></textarea>
				</div>
				<button
					className={`${styles.orderButton} text-black bg-transparent border !border-black py-3 px-10 rounded-xl`}
				>
					Submit
				</button>
			</div> */}

			{/* map */}

			<div className='text-center space-y-5 !mt-[100px]'>
				<h1 className={`${styles.heading} !border-black uppercase`}>
					Location map
				</h1>
				<div className='max-w-[500px] mx-auto rounded-[40px] border border-white'>
					<Image
						className='rounded-t-[40px]'
						src='/coralCourt/map.png'
						alt='map'
						width={500}
						height={500}
					/>
					<div className='py-5 bg-[#D81846] rounded-b-[40px] text-black text-center space-y-3'>
						<h1 className='text-white font-bold'>
							137 2nd St E, North Vancouver, BC Canada V7L1C2
						</h1>
						<div className='flex items-center justify-evenly'>
							<Link
								href='https://www.google.com/maps/place/137+2nd+St+E,+North+Vancouver,+BC+V7L+1C3,+Canada/@49.3119075,-123.079144,17z/data=!3m1!4b1!4m6!3m5!1s0x5486704c354fc42f:0xa664ee95877c23b2!8m2!3d49.311904!4d-123.0765691!16s%2Fg%2F11csks_mg8?entry=ttu'
								target='_blank'
							>
								<button className='bg-[#F9EE15] text-black px-6 py-2 rounded-xl font-bold'>
									Get Direction
								</button>
							</Link>
							<Link
								href='https://order.chatchefs.com/coral-court-c14ef1f2/137-2nd-st-e-north-vancouver-bc-v7l1c2-canada-49e9934a'
								target='_blank'
							>
								<button className='bg-[#fff] px-6 py-2 rounded-xl font-bold text-[#D31D1E]'>
									Order Now
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
