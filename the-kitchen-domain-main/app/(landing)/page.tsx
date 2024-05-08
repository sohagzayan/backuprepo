import Navbar from '@/components/navbar/Navbar';
import Heading from '../utils/Heading';
import Hero from '@/components/landing/hero/Hero';
import Specialties from '@/components/landing/specialties/Specialties';
import HappyClient from '@/components/landing/happy-client/HappyClient';
import Location from '@/components/landing/location/Location';
import HomeMenu from '@/components/landing/home-menu/HomeMenu';

const KitchenPage = async () => {
	return (
		<div>
			<Heading
				title='The Kitchen'
				description='Restaurant in the heart of the city'
				keywords='Restaurant'
			/>
			{/* <Navbar /> */}
			<Hero />
			{/* <Specialties /> */}
			<HomeMenu />
			<HappyClient />
			<Location />
			{/* <HomeAbout /> */}
			{/* <Reviews /> */}

			{/* <Footer /> */}
		</div>
	);
};

export default KitchenPage;
