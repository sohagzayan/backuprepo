'use client';
import { styles } from '@/constants/styles';
import React, { useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { BiPhone } from 'react-icons/bi';

import QRCode from 'qrcode';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import ContactCard from './ContactCard';
import { IoLocationOutline } from "react-icons/io5";
import { CgMail } from 'react-icons/cg';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTiktok } from "react-icons/io5";

type Props = {};

const contactData = [
	{
		id: 1, name: "Richmond", image: "product-cover-133 sec-.png", ratting: "4.9", number: "(604) 330-9615", address: "8531 Alexandra Rd #113, Richmond, BC V6X 1C3", days: "Sunday-Thursday", time: "12:00PM - 10:00PM"
	},
	{
		id: 1, name: "Richmond", image: "fixed-height.png", ratting: "4.9", number: "(604) 330-9615", address: "8531 Alexandra Rd #113, Richmond, BC V6X 1C3", days: "Sunday-Thursday", time: "12:00PM - 10:00PM"
	},
	{
		id: 1, name: "Richmond", image: "fixed-height.png", ratting: "4.9", number: "(604) 330-9615", address: "8531 Alexandra Rd #113, Richmond, BC V6X 1C3", days: "Sunday-Thursday", time: "12:00PM - 10:00PM"
	},
]

const Contact = (props: Props) => {
	// whatsapp qr code generator

	// const [qrCode, setQrCode] = useState<string | null>(null);

	// useEffect(() => {
	// 	const generateQrCode = async () => {
	// 		const groupInvitationLink =
	// 			'https://chat.whatsapp.com/GShW4VWcn2sKVh35ZMRtrc';

	// 		try {
	// 			const code = await QRCode.toDataURL(groupInvitationLink);
	// 			setQrCode(code);

	// 			const qrCodeImage = new Image();
	// 			qrCodeImage.src = code;

	// 			document.body.appendChild(qrCodeImage);
	// 		} catch (error) {
	// 			console.error('Error generating QR code', error);
	// 		}
	// 	};

	// 	generateQrCode();
	// }, []);

	return (
		<div className=' '>
			<div className='space-y-5 text-center bg-[#1E0FC8] py-10'>
				<h1 className={`text-[80px] font-bold`}>Contact</h1>
			</div>

			<div className='w-[60%] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-5'>
				{contactData.map((c) => <ContactCard key={c.id} />
				)}
			</div>

			<div className='bg-[#FEDD00] rounded-xl w-[60%] mx-auto p-10 my-20 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6'>
				<div className=' place-self-center'>
					<h3 className='text-[35px] font-bold text-[#1E0FC8]'>Get in Touch</h3>
					<p className='text-[#1E0FC8]'>We{"'"}d love to hear from you! Whether you have a question about our menu, want to make a reservation, or simply want to share your experience, reach out to us.</p>
				</div>

				<div className='place-self-center'>
					<div>
						<div className='flex items-center gap-5 mt-4'>
							<span className='flex items-center justify-center w-[50px] h-[50px] bg-[#000000] rounded-full '><IoLocationOutline size={25} /></span>
							<p className='text-[#1E0FC8]'>8531 Alexandra Rd #113 <br /> Richmond, BC V6X 1C3</p>
						</div>
						<div className='flex items-center gap-5 mt-4'>
							<span className='flex items-center justify-center w-[50px] h-[50px] bg-[#000000] rounded-full '><CgMail size={25} /></span>
							<p className='text-[#1E0FC8]'>example@email.com</p>
						</div>
						<div className='flex items-center gap-5 mt-4'>
							<span className='flex items-center justify-center w-[50px] h-[50px] bg-[#000000] rounded-full '><MdOutlineLocalPhone size={25} /></span>
							<p className='text-[#1E0FC8]'>(604) 330-9615</p>
						</div>
					</div>
					<div className='flex items-center gap-2 mt-4 '>
						<span className='flex items-center justify-center w-[50px] h-[50px] bg-[#000000]/25 rounded-full '><FaInstagram size={25} /></span>
						<span className='flex items-center justify-center w-[50px] h-[50px] bg-[#000000]/25 rounded-full '><TiSocialFacebook size={25} /></span>
						<span className='flex items-center justify-center w-[50px] h-[50px] bg-[#000000]/25 rounded-full '><IoLogoTiktok size={25} /></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
