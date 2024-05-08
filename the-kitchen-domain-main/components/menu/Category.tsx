import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cart from '../../public/theKitchen/menus/cart.png';
import object3 from '../../public/theKitchen/object3.png';
import object4 from '../../public/theKitchen/object4.png';

type Props = {};

const category = [
	{
		id: 1,
		name: 'Appetizers',
		startsFrom: 12.5,
		image: '/theKitchen/menus/menu1.jpeg',
	},
	{
		id: 2,
		name: 'Special Soups',
		startsFrom: 5,
		image: '/theKitchen/menus/menu2.jpeg',
	},
	{
		id: 3,
		name: 'Vietnamese subs',
		startsFrom: 2.25,
		image: '/theKitchen/menus/menu3.jpeg',
	},
	{
		id: 4,
		name: 'Rice Dishes',
		startsFrom: 15.0,
		image: '/theKitchen/menus/menu4.jpeg',
	},
	{
		id: 5,
		name: 'Beverages',
		startsFrom: 16.5,
		image: '/theKitchen/menus/menu5.jpeg',
	},
	{
		id: 6,
		name: 'Vermicelli',
		startsFrom: 5.75,
		image: '/theKitchen/menus/menu6.jpeg',
	},
	{
		id: 7,
		name: 'Noodle Soup pho',
		startsFrom: 17.0,
		image: '/theKitchen/menus/menu7.jpeg',
	},
];

const Category = (props: Props) => {
	return (
		<div className='relative '>
			<div className='w-[80%] lg:w-[60%]  mx-auto '>
				<h1 className='text-4xl font-bold'>Our Category</h1>
				<div className='border-t-2 my-10' />
				<div className='flex flex-wrap gap-10 items-center justify-center mb-[300px]'>
					{category.map((item) => (
						<div key={item.id} className='z-10'>
							<div className='w-[220px] h-[230px] border-2 rounded-[20px] p-3 flex flex-col justify-end items-center space-y-3 relative mt-10 shadow-lg'>
								<Image
									src={item.image}
									alt={item.name}
									width={150}
									height={150}
									className='absolute -top-[50px]  bg-white rounded-[20px] w-[170px] h-[120px]'
									style={{
										boxShadow:
											'0px 0px 16px 0px rgba(0,0,0,0.35)',
									}}
								/>
								<p className='text-center font-bold text-[#EE0202] text-sm'>
									{item.name}
								</p>
								{/* <p className='text-lg font-bold'>
									Starts From ${item.startsFrom}
								</p> */}
								<Link
									href='https://order.chatchefs.com/the-kitchen-3f1ebf4a/2620-sasamat-st-vancouver-bc-v6r-4a8-canada-ca79c1e1/menu'
									target='_blank'
									className='flex items-center justify-center border border-black w-full rounded-[10px] '
								>
									<div className='flex-1 w-64 text-center'>
										<p className='cursor-pointer text-sm font-bold'>
											More information
										</p>
									</div>
									<div className='border-l border-black  flex-none p-3 cursor-pointer'>
										<Image src={cart} alt='cart' />
									</div>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
			<Image
				src={object3}
				alt='cart'
				className='absolute right-0 -bottom-[250px] z-0'
			/>
			<Image
				src={object4}
				alt='cart'
				className='absolute left-0 -bottom-[250px] z-0'
			/>
		</div>
	);
};

export default Category;
