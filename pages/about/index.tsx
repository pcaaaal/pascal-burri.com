import Head from 'next/head';

export const metadata = {
	title: 'Pascal Burri - About',
	description: 'This is a page about me.',
};

const timelineData = [
	{id: 1, title: 'Step 1', description: 'Description of step 1.'},
	{id: 2, title: 'Step 2', description: 'Description of step 2.'},
	// Add more steps as needed
];

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
					<div className="tw-flex tw-flex-col tw-items-center tw-py-8 tw-z-20">
						<div className="tw-bg-neutral-900 dark:tw-bg-neutral-100 tw-h-6 tw-aspect-square tw-rounded-full tw-translate-y-1"></div>
						{/* Vertical line */}
						<div className="tw-bg-neutral-900 dark:tw-bg-neutral-100 tw-h-48 tw-w-1 tw-rounded-full"></div>
						{/* Dot */}
						<div className="tw-bg-neutral-900 dark:tw-bg-neutral-100 tw-h-6 tw-aspect-square tw-rounded-full -tw-translate-y-1"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
