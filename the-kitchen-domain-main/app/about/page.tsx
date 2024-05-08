import AboutUs from '@/components/about/AboutUs';
import NewsLetter from '@/components/about/NewsLetter';

import WhyChooseUs from '@/components/about/WhyChooseUs';
import React from 'react';
import AboutBanner from '@/components/about/AboutBanner';

type Props = {};

const AboutPage = (props: Props) => {
	return (
		<div className=''>
			<AboutBanner />
			<AboutUs />
			<WhyChooseUs />
			<NewsLetter />
		</div>
	);
};

export default AboutPage;
