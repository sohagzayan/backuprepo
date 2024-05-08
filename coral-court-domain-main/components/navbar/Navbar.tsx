'use client';
import React from 'react';
import Image from 'next/image';
import { AiOutlineInstagram, AiOutlineMenu } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import { styles } from '@/constants/styles';
import { usePathname } from 'next/navigation';
import { MdOutlineClose } from 'react-icons/md';

type Props = {};

const Navbar = (props: Props) => {
	const [open, setOpen] = React.useState(false);
	const dropdownRef = React.useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	const toggleOpen = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickOutside = (e: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(e.target as Node)
		) {
			setOpen(false);
		}
	};

	React.useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	console.log(open);
	const navMenu = [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'About',
			link: '/about',
		},
		{
			name: 'Gallery',
			link: '/gallery',
		},
		{
			name: 'Contact',
			link: '/contact',
		},
	];

	return (
		<div className='w-full text-white'>
			<div className='bg-[#1E0FC8] h-[250px] flex justify-between items-center w-full'>
				<div className='flex justify-between items-center w-[70%] mx-auto'>
					<div className='border-2 border-[#E1B168] text-[#DEDEDE] rounded-xl font-normal py-2 px-6 cursor-pointer hidden md:block'>
						Call - (604) 330-9615
					</div>
					<div className='flex items-center justify-center mx-auto'>
						<Link href={'/'}>
							<Image
								src='/nicetealogo.svg'
								alt='logo'
								width={300}
								height={200}
							/>
						</Link>
					</div>
					<a
						href='https://order.chatchefs.com/coral-court-c14ef1f2/137-2nd-st-e-north-vancouver-bc-v7l1c2-canada-49e9934a'
						className={`py-2 px-6 rounded-xl capitalize hidden md:block border-[3px] bg-[#FEDD00] border-[#FEDD00] text-[#1E0FC8] font-bold`}
					>
						Order NOW
					</a>
				</div>
			</div>
			<div className='bg-[#1E0FC8] h-[50px] flex justify-between items-center border border-[#5C6168]'>
				<div className='flex justify-between items-center w-[60%] mx-auto'>
					<ul className='md:flex items-center justify-between gap-10 font-bold hidden'>
						{navMenu.map((item, index) => (
							<li key={index}>
								<Link
									href={item.link}
									className={
										pathname === item.link
											? 'text-[#F9EE15] font-extra-bold border-b-2 pb-1 border-[#F9EE15]'
											: ''
									}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
					<div className='flex items-center justify-between gap-5 font-bold'>
						<a
							href='https://www.instagram.com/coral_court/'
							target='_blank'
						>
							<AiOutlineInstagram
								size={25}
								className='cursor-pointer'
							/>
						</a>
						<a
							href='https://www.facebook.com/pages/Coral%20Court%20Szechuan%20Cuisine/138483669498522/'
							target='_blank'
						>
							<BsFacebook size={20} className='cursor-pointer' />
						</a>
					</div>
					<div
						onClick={toggleOpen}
						className='cursor-pointer md:hidden text-white'
					>
						<AiOutlineMenu size={25} />
					</div>
					{open && (
						<div
							ref={dropdownRef}
							className='absolute rounded-xl shadow-md w-3/4 bg-white overflow-hidden right-2 top-[310px] text-sm font-bold p-4 h-auto md:hidden '
						>
							<div className='flex flex-col gap-3'>
								<MdOutlineClose
									className='text-rose-500 cursor-pointer absolute right-4 top-4'
									onClick={handleClose}
									size={25}
								/>
								<ul className='mobile__menu'>
									{navMenu.map((item, index) => (
										<li
											key={index}
											className='text-black font-bold py-2 px-4 cursor-pointer'
										>
											<Link
												href={item.link}
												className={
													pathname === item.link
														? 'text-rose-500 font-extra-bold border-b-2 pb-1 border-rose-500'
														: ''
												}
											>
												{item.name}
											</Link>
										</li>
									))}
									<hr />
								</ul>
								<div className='space-y-2'>
									<button className='border-2 border-black rounded-xl text-black font-bold p-3 cursor-pointer text-center'>
										Call - 7785511966
									</button>
									<button className='bg-black py-3 px-6 text-[#ffe501] rounded-xl uppercase border-[3px] border-white cursor-pointer text-center'>
										<a
											href='https://order.chatchefs.com/coral-court-c14ef1f2/137-2nd-st-e-north-vancouver-bc-v7l1c2-canada-49e9934a'
											target='_blank'
										>
											Order now
										</a>
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
