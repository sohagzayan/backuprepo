import { Yesteryear } from 'next/font/google';
import React from 'react';
import reviewImg from '../../../public/theKitchen/reviews.png';
import Image from 'next/image';

type Props = {};

const yesteryear = Yesteryear({
	weight: '400',
	subsets: ['latin'],
});

const Reviews = (props: Props) => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<div>
				<h1
					className={`${yesteryear.className} text-2xl md:text-6xl font-bold text-center`}
				>
					Reviews
				</h1>
			</div>
			<Image src={reviewImg} alt='review image' />
		</div>
	);
};

export default Reviews;
