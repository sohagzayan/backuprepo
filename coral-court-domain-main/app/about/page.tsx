import AboutUs from '@/components/about/AboutUs';
import ColorDrinkBanner from '@/components/about/ColorDrinkBanner';
import NewsLetter from '@/components/about/NewsLetter';
import OurGreatServices from '@/components/about/OurGreatServices';
import Philosophy from '@/components/about/Philosophy';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import React from 'react';

type Props = {};

const AboutPage = (props: Props) => {
	return (
		<div className='text-white'>
			<AboutUs />
			<OurGreatServices />
			<ColorDrinkBanner />
			{/* <Philosophy /> */}
			{/* <WhyChooseUs /> */}
			{/* <NewsLetter /> */}
		</div>
	);
};

export default AboutPage;
