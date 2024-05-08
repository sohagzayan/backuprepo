import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Membership = (props: Props) => {
	return (
		<div className='text-white'>
			<div
				className='w-full mx-auto h-auto flex flex-col lg:flex-row items-center justify-center py-[50px] gap-5 lg:px-[100px]'
				style={{
					backgroundImage: 'url(/coralCourt/membershipBanner.png)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className='flex-1 text-center lg:text-start'>
					<div className='border-4 rounded-2xl bg-white  border-[#D23135] inline-block p-4'>
						<h1 className='text-md md:text-3xl font-bold text-black'>
							Get Our
						</h1>
						<h1 className='text-[#D23135] font-bold uppercase text-xl md:text-3xl lg:text-6xl'>
							Membership
						</h1>
						<p
							className='text-[10px] md:text-xl w-[100%] text-black'
							style={{
								fontWeight: 50,
								fontStretch: 'ultra-condensed',
								fontStyle: 'italic',
							}}
						>
							Get a special offers and other exclusive services by
							owning a membership.
						</p>
						<button className='mt-4'>
							<Link
								href={
									'hhttps://order.chatchefs.com/coral-court-c14ef1f2/137-2nd-st-e-north-vancouver-bc-v7l1c2-canada-49e9934a'
								}
								className='text-[10px] md:text-base py-3 px-4 border border-[#F9EE15] md:border-[3px]  text-black rounded-xl mt-4'
							>
								Learn More
							</Link>
						</button>
					</div>
				</div>
				<div className='items-center justify-center mx-auto lg:block hidden'>
					<Image
						src='/coralCourt/membershipCard.png'
						alt='membershipCard'
						width={450}
						height={450}
					/>
				</div>
			</div>
		</div>
	);
};

export default Membership;
