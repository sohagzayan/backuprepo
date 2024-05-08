import { styles } from '@/constants/styles';
import { DiffieHellmanGroup } from 'crypto';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { FaLocationDot, FaPhone, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';


type Props = {};

const Footer = (props: Props) => {
	return (
		<div className='bg-[#1E0FC8] h-full '>
			<div className='w-[80%] mx-auto' />
			<div className='w-[80%] mx-auto'>


				<div className='flex flex-col lg:flex-row justify-between items-center text-center lg:text-start  space-y-10 lg:space-y-0 py-20'>
					{/* Contacts */}
					<div className='space-y-2 w-full lg:w-[40%]'>

						<div className='flex items-center gap-4'>
							<div>
								<FaPhone color='#FFD400' size={20} />
							</div>
							<div>
								<h3 className='text-[18px] font-bold'>Phone</h3>
								<p className='text-[#A3A4A7]'>(604) 330-9615</p>
							</div>
						</div>
						<div className='flex items-center gap-4'>
							<div>
								<MdEmail color='#FFD400' size={20} />
							</div>
							<div>
								<h3 className='text-[18px] font-bold'>Email</h3>
								<p className='text-[#A3A4A7]'>Example@email.com</p>
							</div>
						</div>
						<div className='flex items-center gap-4'>
							<div>
								<FaLocationDot color='#FFD400' size={20} />
							</div>
							<div>
								<h3 className='text-[18px] font-bold'>Address</h3>
								<p className='text-[#A3A4A7]'>8531 Alexandra Rd #113 Richmond, BC V6X 1C3</p>
							</div>
						</div>

					</div>

					{/* Operating hours */}
					<div className='w-full lg:w-[20%] space-y-3'>
						<h1 className='font-bold text-xl'>Restaurant</h1>
						<p>Home</p>
						<p>About</p>
						<p>Gallery</p>
						<p>Contact</p>
					</div>
					<div className='w-full lg:w-[20%] space-y-3'>
						<h1 className='font-bold text-xl'>Operating Hours</h1>
						<p>Sunday-Thursday <br />
							12:00PM - 10:00PM
						</p>
						<p>Friday-Saturday <br />
							12:00PM - 11:00PM</p>
					</div>
					{/* logo */}
					<div className='w-full lg:w-[30%] flex items-center lg:items-start justify-end flex-col'>
						{/* <Image src={footerImage} alt='logo' /> */}
						<Image
							src='/coralCourt/nicetealogo2.png'
							alt='logo'
							width={200}
							height={200}
						/>
					</div>
				</div>

				<div className='text-center py-5 text-center   text-white border-t border-[#ECEBEB] mt-4'>
					<p className='text-[#A3A4A7]'>
						Copyright <strong className='text-white'>NiceTea</strong> 2024 All Right Reserved
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
