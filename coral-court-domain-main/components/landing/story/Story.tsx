import Image from 'next/image';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { RxCounterClockwiseClock } from 'react-icons/rx';
import { CgNotes } from 'react-icons/cg';
import Link from 'next/link';

type Props = {};

const data = [
	{
		id: 1,
		title: 'Locate Us',
		icon: <CiLocationOn />,
		description: '137 2nd St E, North Vancouver, BC Canada V7L1C2',
	},
	{
		id: 2,
		title: 'Opening Hours',
		icon: <RxCounterClockwiseClock />,
		description: '8531 Alexandra Rd #113  Richmond, BC V6X 1C3',
	},
	{

		id: 3,
		title: 'Order From',
		icon: <CgNotes />,
		description: 'orders.chatchef.com/coralCourt',
	},
];

const Story = (props: Props) => {
	return (
		<div className='text-white bg-[#FFD400] py-10'>
			<div className='grid grid-cols-3 md:flex-row justify-center  w-full lg:w-[80%] mx-auto gap-6 p-4 '>

				<div className='flex items-center justify-center gap-5'>
					<div className='bg-[#1E0FC8] border-transparent font-bold rounded-full p-3  text-white text-3xl flex items-center justify-center w-[50px] h-[50px]'>
						<CiLocationOn />
					</div>
					<div className='flex flex-col'>
						<h1 className='text-[#1E0FC8] text-[1.6rem] font-bold'>
							Locate Us
						</h1>
						<a href='https://order.chatchefs.com/coral-court-c14ef1f2/137-2nd-st-e-north-vancouver-bc-v7l1c2-canada-49e9934a'>
							<p className='text-[16px] tracking-wider w-[200px] text-[#4A4A4A] leading-5'>
								8531 Alexandra Rd #113 <br /> Richmond, BC V6X 1C3
							</p>
						</a>
					</div>
				</div>

				<div className='flex justify-center  items-center gap-5'>
					<div className='bg-[#1E0FC8] font-bold rounded-full p-3  text-white text-3xl flex items-center justify-center w-[50px] h-[50px]'>
						<CiLocationOn />
					</div>
					<div className='flex flex-col'>
						<h1 className='text-[#1E0FC8] text-[1.6rem] font-bold'>
							Open Hours
						</h1>
						<a href='https://order.chatchefs.com/coral-court-c14ef1f2/137-2nd-st-e-north-vancouver-bc-v7l1c2-canada-49e9934a'>
							<p className='text-[16px] tracking-wider  text-[#4A4A4A] leading-5'>
								Sun-Thu 12:00PM - 10:00PM <br /> Fri-Sat 12:00PM - 11:00PM
							</p>
						</a>
					</div>
				</div>

				<div className='flex justify-center items-center gap-5'>
					<div className='bg-[#1E0FC8] font-bold rounded-full p-3  text-white text-3xl flex items-center justify-center w-[50px] h-[50px]'>
						<CiLocationOn />
					</div>
					<div className='flex flex-col'>
						<h1 className='text-[#1E0FC8] text-[1.6rem] font-bold'>
							Contact
						</h1>
						<a href='https://order.chatchefs.com/coral-court-c14ef1f2/137-2nd-st-e-north-vancouver-bc-v7l1c2-canada-49e9934a'>
							<p className='text-[16px] tracking-wider w-[200px] text-[#4A4A4A] leading-5'>
								Example@email.com
							</p>
						</a>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Story;
