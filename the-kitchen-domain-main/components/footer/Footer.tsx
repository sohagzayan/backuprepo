import { styles } from '@/constants/styles';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import footerImage from '../../public/theKitchen/footer.svg';
import { Yesteryear } from 'next/font/google';
type Props = {};

const Footer = (props: Props) => {
	return (
		<div className=' h-full w-[80%] mx-auto'>
			<div className='w-[80%] mx-auto' />

			<div className='flex flex-col lg:flex-row justify-between items-center text-center lg:text-start pt-5 space-y-10 lg:space-y-0'>
				{/* Contacts */}
				<div className='space-y-3 w-full lg:w-[30%]'>
					<h1 className='text-2xl font-bold '>Contact Details</h1>
					<p>
						2620 Sasamat St, Vancouver, BC <br /> Canada V6R4A8
					</p>
					<p>Telephone : +1 604-261-5353</p>
				</div>

				{/* Operating hours */}
				<div className='w-full lg:w-[30%] space-y-3'>
					<h1 className='font-bold text-2xl'>Operating Hours</h1>
					<p>Sunday - Monday : Closed</p>
					<p>Tuesday - Thursday : 11:30 a.m. - 8:30 p.m.</p>
					<p>Friday : 11:30 a.m. - 11:30 p.m.</p>
					<p>Saturday : 12:30 p.m. - 11:30 p.m.</p>
				</div>
				{/* logo */}
				<div className='w-full lg:w-[30%] flex items-center lg:items-start justify-end flex-col'>
					<Image src={footerImage} alt='logo' />
					<p>
						At The Kitchen in Vancouver, we&apos;re more than just a
						restaurant. With a focus on fresh, local ingredients and
						global flavors, our menu offers unforgettable dining
						experiences. Join us for brunch, dinner, or a special
						event and savor the moment
					</p>
				</div>
			</div>np
			<hr className='mt-10' />

			<div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between py-5 text-center   text-white'>
				<p>
					© Copyright - The Kitchen | Designed and Powered by ChatChef
				</p>
				<p>Copyright / Licenses</p>
			</div>
		</div>
	);
};

export default Footer;
