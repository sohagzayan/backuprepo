import { styles } from '@/constants/styles';
import Image from 'next/image';
import React from 'react';

type Props = {};

const gallaryImages = [
	"gallery1",
	"gallery2",
	"gallery3",
	"gallery4",
	// "gallery5",
	// "gallery6",
	"gallery7",
	"gallery8",
	"gallery9",
	"gallery10",
	"gallery11",
	"gallery12",
	"gallery13",
	"gallery14",
	"gallery15",
	"gallery16",
	"gallery17",
	"gallery18",
]

const Gallery = (props: Props) => {
	return (
		<div className=''>
			<div className=' text-center bg-[#1E0FC8] py-20 font-bold'>
				<h1 className={`text-[80px] `}>
					Gallery
				</h1>
			</div>
			<div>

			</div>


			<div className=" mt-20  w-[70%] mx-auto mb-20">


				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">

					<div className='col-span-2  '>
						<Image className=" rounded-lg " src="/coralCourt/gallery/rename.png" width={800} height={800} alt="" />
					</div>
					<div className=''>
						<Image className="rounded-lg" src="/coralCourt/gallery/gallery2.jpg" alt="" width={800} height={800} />
					</div>
					<div className=''>
						<Image className=" rounded-lg" src="/coralCourt/gallery/gallery3.png" alt="" width={800} height={800} />
					</div>

					<div>
						<img className="h-auto max-w-full rounded-lg" src="/coralCourt/gallery/gallery4.png" alt="" />
					</div>
					<div>
						<img className="h-auto max-w-full rounded-lg" src="/coralCourt/gallery/gallery5.png" alt="" />
					</div>
					<div className='col-span-2 '>
						<img className="h-auto max-w-full rounded-lg" src="/coralCourt/gallery/gallery6.jpg" alt="" />
					</div>


					<div className='col-span-2 '>
						<img className="h-auto max-w-full rounded-lg" src="/coralCourt/gallery/gallary7.png" alt="" />
					</div>
					<div>
						<img className="h-auto max-w-full rounded-lg" src="/coralCourt/gallery/gallery9.png" alt="" />
					</div>
					<div className=''>
						<img className="h-auto max-w-full rounded-lg" src="/coralCourt/gallery/gallery10.png" alt="" />
					</div>


					<div className=' '>
						<img className="h-auto max-w-full rounded-lg" src="/coralCourt/gallery/gallery11.png" alt="" />
					</div>
					<div>
						<img className="h-auto max-w-full rounded-lg" src="/coralCourt/gallery/gallary12.jpg" alt="" />
					</div>
					<div className='col-span-2'>
						<img className="h-auto max-w-full rounded-lg" src="/coralCourt/gallery/gallery13.png" alt="" />
					</div>


					<div className='col-span-2 '>
						<img className="h-auto max-w-full rounded-lg" src="/coralCourt/gallery/gallery20.png" alt="" />
					</div>
					<div>
						<img className="h-auto max-w-full rounded-lg" src="/coralCourt/gallery/gallery21.png" alt="" />
					</div>
					<div className=''>
						<img className="h-auto max-w-full rounded-lg" src="/coralCourt/gallery/gallery22.png" alt="" />
					</div>


					<div className=''>
						<img className="h-auto max-w-full rounded-lg" src="/coralCourt/gallery/gallery26.png" alt="" />
					</div>
					<div>
						<img className="h-auto max-w-full rounded-lg" src="/coralCourt/gallery/gallery25.png" alt="" />
					</div>
					<div className='col-span-2'>
						<img className="h-auto max-w-full rounded-lg" src="/coralCourt/gallery/gallery24.png" alt="" />
					</div>



				</div>

				<div className='flex justify-center mt-10'>
					<button className='text-[#1E0FC8] px-8 py-2 rounded-lg border-2 border-[#1E0FC8] font-bold'>See all items</button>

				</div>
			</div>


			{/* <div className='w-[70%] mx-auto '>
				{gallaryImages.map((img) =>
					<img
						key={img}
						src={`/coralCourt/gallery/${img}.png`}
						alt='gallary'
					/>
				)}
			</div> */}
		</div>
	);
};

export default Gallery;
