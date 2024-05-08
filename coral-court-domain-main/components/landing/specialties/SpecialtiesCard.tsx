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
		<div
			className='p-5 flex flex-col items-center justify-evenly w-[300px] h-[350px] text-center'
			style={{
				borderRadius: '20px',
				background: '#D81846',
				boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.25)',
			}}
		>
			<Image
				src={image}
				alt={image}
				width={400}
				height={400}
				className='rounded-2xl'
			/>
			<h1 className=' font-bold'>{name}</h1>
			<Link
				href='https://order.chatchefs.com/coral-court-c14ef1f2/137-2nd-st-e-north-vancouver-bc-v7l1c2-canada-49e9934a'
				className=' py-3 px-5 bg-white text-black rounded-2xl font-bold'
			>
				<button>View Details</button>
			</Link>
		</div>
	);
};

export default SpecialtiesCard;
