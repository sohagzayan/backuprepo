import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface SpecialtiesCardProps {
	image: string;
	name: string;
	varieties: number;
}

const SpecialtiesCard: FC<SpecialtiesCardProps> = ({
	image,
	name,
	varieties,
}) => {
	return (
		<div className='border-[3px] border-[#ffe501] rounded-tl-3xl rounded-br-3xl p-5 flex flex-col items-center justify-evenly w-[300px] h-[350px] text-center'>
			<Image src={image} alt={image} width={400} height={400} />
			<h1 className=''>{name}</h1>
			<Link
				href='https://order.chatchefs.com/the-kitchen-3f1ebf4a/2620-sasamat-st-vancouver-bc-v6r-4a8-canada-ca79c1e1/menu'
				target='_blank'
				className='w-full py-2 px-5 bg-[#ffe501] text-black   rounded-tl-2xl rounded-br-2xl border-[3px] border-white'
			>
				<button>{varieties} Varieties</button>
			</Link>
		</div>
	);
};

export default SpecialtiesCard;
