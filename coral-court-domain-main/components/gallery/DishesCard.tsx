import Image from 'next/image';
import React, { FC } from 'react';

interface SpecialtiesCardProps {
	image: string;
	name: string;
}

const DishesCard: FC<SpecialtiesCardProps> = ({ image, name }) => {
	return (
		<div className=' rounded-t-xl flex flex-col items-center justify-evenly w-[200px]'>
			<Image
				className='w-full rounded-t-xl'
				src={image}
				alt={image}
				width={1000}
				height={1000}
			/>
		</div>
	);
};

export default DishesCard;
