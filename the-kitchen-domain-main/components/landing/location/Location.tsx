import Image from 'next/image';
import React from 'react';
import locationMap from '../../../public/theKitchen/map.png';
import Link from 'next/link';

type Props = {};

const Location = (props: Props) => {
	return (
		<div className='pb-20 px-10 bg-white text-black'>
			<div className=''>
				<div className='flex flex-col md:flex-row items-center justify-center gap-10'>
					<div className='max-w-[500px]'>
						<Image src={locationMap} alt='location' width={700} />
					</div>
					<div className='border rounded-2xl'>
						<div className='p-5'>
							<Image
								src={'/theKitchen/locationBanner.png'}
								alt='location'
								width={410}
								height={300}
							/>
						</div>
						<div className=' p-5 font-bold space-y-5 bg-black rounded-b-2xl text-white'>
							<p>2620 Sasamat St, Vancouver, BC Canada V6R4A8</p>
							<p>Tel: +1 604-261-5353</p>
							<div className='flex gap-5 '>
								<Link
									href='https://order.chatchefs.com/the-kitchen-3f1ebf4a/2620-sasamat-st-vancouver-bc-v6r-4a8-canada-ca79c1e1'
									target='_blank'
								>
									<button className='bg-black  px-6 py-3 rounded-[15px] hover:bg-white hover:text-black border-2 border-white transition ease-in-out duration-300'>
										Order Now
									</button>
								</Link>
								<Link
									href='https://www.google.com/maps/place/2620+Sasamat+St,+Vancouver,+BC+V6R+4A8,+Canada/@49.2634625,-123.2114359,17z/data=!4m6!3m5!1s0x548672e5ccfbd0e3:0x1e82e049010d5085!8m2!3d49.263459!4d-123.208861!16s%2Fg%2F11mbsywwt6?entry=ttu'
									target='_blank'
								>
									<button className='bg-white text-black hover:text-white px-6 py-3 rounded-[15px] hover:bg-black hover: border-2 border-white transition ease-in-out duration-300'>
										Get Direction
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Location;
