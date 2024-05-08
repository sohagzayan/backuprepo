import { styles } from '@/constants/styles';
import React from 'react';

type Props = {};

const Explore = (props: Props) => {
	return (
		<div className='my-10 space-y-5 w-full lg:w-[50%] mx-auto text-center px-5'>
			<h1
				className={`${styles.heading} border-white uppercase tracking-widest !text-3xl`}
			>
				Explore & Relish
			</h1>
			<p className='w-full lg:w-[40%] mx-auto'>
				Every image in our gallery tells a story—a story of passion,
				dedication, and the love we pour into every dish. We invite you
				to explore our gallery and, more importantly, to visit us and
				create your own delightful memories.
			</p>
		</div>
	);
};

export default Explore;
