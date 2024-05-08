import Link from 'next/link';

export default function NotFound() {
	return (
		<main className='grid min-h-screen place-content-center space-y-5 text-center'>
			<h2 className='text-3xl font-semibold'>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href='/'>
				<button className='font-semibold rounded-xl border border-[#ffe501] py-3 px-6'>
					Return Home
				</button>
			</Link>
		</main>
	);
}
