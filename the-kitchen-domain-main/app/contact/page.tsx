import NewsLetter from '@/components/about/NewsLetter';
import Contact from '@/components/contact/Contact';
import Feedback from '@/components/contact/Feedback';
import React from 'react';

type Props = {};

const GalleryPage = (props: Props) => {
	return (
		<div>
			<Contact />
			<Feedback />
			<NewsLetter />
		</div>
	);
};

export default GalleryPage;
