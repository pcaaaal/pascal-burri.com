import Head from 'next/head';

export const metadata = {
	title: 'Pascal Burri - About',
	description: 'This is a page about me.',
};

export default function Home() {
	return (
		<div className="tw-overflow-hidden">
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/public/icons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/public/icons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/public/icons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/public/site.webmanifest" />
			</Head>
			<div className="tw-min-h-screen">
				<div className="tw-w-full tw-flex tw-flex-col tw-items-center">
					<h1 className="text-large tw-font-bold tw-mb-0 tw-mt-20 tw-text-center tw-z-10">
						About
					</h1>
				</div>
			</div>
		</div>
	);
}
