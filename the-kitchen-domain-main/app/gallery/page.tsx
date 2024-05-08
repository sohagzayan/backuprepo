import Ambiance from '@/components/gallery/Ambiance';
import Dishes from '@/components/gallery/Dishes';
import Explore from '@/components/gallery/Explore';
import Gallery from '@/components/gallery/Gallery';
import Moments from '@/components/gallery/Moments';
import Planning from '@/components/gallery/Planning';
import { styles } from '@/constants/styles';
import Image from 'next/image';
import React from 'react';

type Props = {};

const GalleryPage = (props: Props) => {
	return (
		<div>
			<Gallery />
			<Dishes />
			{/* <Moments /> */}
			{/* <Planning /> */}
		</div>
	);
};

export default GalleryPage;
