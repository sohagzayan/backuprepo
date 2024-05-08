import { styles } from '@/constants/styles';
import { Yesteryear } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import map from '../../public/theKitchen/map.png';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';
import { BiPhone } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import locationMap from '../../public/theKitchen/map.png';
import Location from '../landing/location/Location';

type Props = {};

const yesteryear = Yesteryear({
	weight: '400',
	subsets: ['latin'],
});

const Feedback = (props: Props) => {
	return (
		<div className=' mx-auto py-10 space-y-8 bg-white text-black'>
			<div className='text-center space-y-5'>
				<p className='font-bold'>Contact Us</p>
				<h1 className='text-4xl font-bold'>
					We&apos;d love to hear from
					<br /> you
				</h1>
				<p>Our friendly team is always here to chat</p>
			</div>
			<div className='flex flex-col lg:flex-row gap-5 items-center justify-evenly'>
				<div className='flex flex-col items-center justify-center gap-3'>
					<CiLocationOn
						className='bg-black text-white rounded-full p-1'
						size={40}
					/>
					<h1 className='text-lg font-bold'>Office</h1>
					<p>Come say hello at our office</p>
					<p className='font-bold text-center'>
						2620 Sasamat St, Vancouver, BC <br />
						Canada V6R4A8
					</p>
				</div>
				<div className='flex flex-col items-center justify-center gap-3'>
					<BiPhone
						className='bg-black text-white rounded-full p-2'
						size={40}
					/>
					<h1 className='text-lg font-bold'>Phone</h1>
					<p>Call us</p>
					<p className='font-bold text-center'>+1 604-261-5353</p>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
