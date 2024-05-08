import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { siteConfig } from '../app/config/siteConfig';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
	description: siteConfig.description,
	// TODO: need to add the keywords (search)
	keywords: [''],

	creator: 'Remote kitchen',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	ogImage: {
		url: siteConfig.url + siteConfig.ogImage,
		width: 28,
		height: 28,
		alt: siteConfig.name,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
