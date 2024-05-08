import Navbar from '@/components/navbar/Navbar';
import Heading from '../utils/Heading';
import Hero from '@/components/landing/hero/Hero';
import Specialties from '@/components/landing/specialties/Specialties';
import Membership from '@/components/landing/membership/Membership';
import Testimonials from '@/components/landing/testimonials/Testimonials';
import Story from '@/components/landing/story/Story';
import HomeGallery from '@/components/landing/gallery/HomeGallery';
import DrinkMenu from '@/components/landing/drinkmenu/DrinkMenu';
import RedeemReward from '@/components/landing/redeemreward/RedeemReward';
import HappyClient from '@/components/landing/happyClient/HappyClient';
import Footer from '@/components/footer/Footer';

const KitchenPage = async () => {
	return (
		<div>
			<Heading
				title='Coral Court'
				description='Restaurant in the heart of the city'
				keywords='Restaurant'
			/>
			{/* <Navbar /> */}
			<Hero />
			<Story />
			<DrinkMenu />
			<RedeemReward />
			<HappyClient />
			{/* <Specialties /> */}
			{/* <Membership /> */}
			{/* <Testimonials /> */}
			{/* <Offer /> */}
			{/* <HomeGallery /> */}
			{/* <Footer /> */}
		</div>
	);
};

export default KitchenPage;
