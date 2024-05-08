'use client';
import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import './Navbar.scss';
import { AiOutlineMenu } from 'react-icons/ai';
import { useParams, usePathname } from 'next/navigation';
import { MdOutlineClose } from 'react-icons/md';
import logo from '../../public/theKitchen/logo.svg';

type Props = {};

const Navbar = (props: Props) => {
	const pathname = usePathname();
	const [open, setOpen] = React.useState(false);
	const dropdownRef = React.useRef<HTMLDivElement>(null);

	const toggleOpen = () => {
		setOpen(!open);
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

	const navMenu = [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'Menu',
			link: '/menu',
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
		<div className='w-full shadow-2xl z-[1000]'>
			<div className='flex gap-10 justify-between px-20 md:py-5 items-center'>
				<div>
					<Image
						className='hidden md:block w-[50px]'
						src={logo}
						alt='logo'
					/>
				</div>
				<div>
					<ul className='md:flex items-center justify-between gap-20 text-while hidden'>
						{navMenu.map((item, index) => (
							<li
								key={index}
								className={
									pathname === item.link
										? 'text-white font-bold'
										: ''
								}
							>
								<Link href={item.link}>{item.name}</Link>
								{pathname === item.link && (
									<div className='flex flex-col items-center'>
										<div className='dot' />
									</div>
								)}
							</li>
						))}
					</ul>
				</div>
				<div className='hidden md:hidden lg:block'>
					<Link
						href={
							'https://order.chatchefs.com/the-kitchen-3f1ebf4a/2620-sasamat-st-vancouver-bc-v6r-4a8-canada-ca79c1e1/menu'
						}
						target='_blank'
					>
						<button className='bg-white px-6 py-3 rounded-2xl text-black font-bold hover:translate-y-1 transition '>
							Order Now
						</button>
					</Link>
				</div>
			</div>

			<div className='flex justify-between px-10 items-center md:hidden py-4'>
				<div>
					<Image
						src='/theKitchen/logo.svg'
						alt='logo'
						width={100}
						height={100}
					/>
				</div>

				<div
					onClick={toggleOpen}
					className='cursor-pointer lg:hidden text-white'
				>
					<AiOutlineMenu size={25} />
				</div>
			</div>

			{open && (
				<div className='absolute rounded-xl shadow-md w-3/4 md:w-2/4 bg-white overflow-hidden right-2 top-[60px] text-sm font-bold p-4 h-auto md:hidden z-20'>
					<div className='flex flex-col cursor-pointer gap-3'>
						<MdOutlineClose
							className='text-black cursor-pointer absolute right-4 top-4'
							onClick={handleClose}
							size={25}
						/>
						<ul className='mobile__menu space-y-5'>
							{navMenu.map((item, index) => (
								<li key={index}>
									<Link
										href={item.link}
										className={
											pathname === item.link
												? 'text-rose-500 font-extra-bold border-b-2 pb-1 border-rose-500'
												: 'text-black font-bold'
										}
									>
										{item.name}
									</Link>
								</li>
							))}
							<hr />
						</ul>
						<div className='space-x-2 flex items-center justify-center gap-2'>
							<button className='border-2 border-black rounded-xl text-black font-bold p-3 cursor-pointer text-center'>
								Call - +1 604-261-5353
							</button>
							<button className='bg-black py-3 px-6 text-rose-500 rounded-xl uppercase border-2 border-black cursor-pointer text-center'>
								<a href='https://order.chatchefs.com/the-kitchen-3f1ebf4a/2620-sasamat-st-vancouver-bc-v6r-4a8-canada-ca79c1e1/menu'>
									Order now
								</a>
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
