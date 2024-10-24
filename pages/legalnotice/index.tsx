import Head from 'next/head';

export const metadata = {
	title: 'Pascal Burri - Impressum',
	description: 'Impressum für die Website pascal-burri.com',
};

export default function Home() {
	return (
		<div className="tw-overflow-hidden">
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</Head>
			<div className="tw-min-h-screen tw-m-0 tw-p-0  tw-flex tw-flex-col tw-items-center">
				<div className="tw-w-full tw-flex tw-flex-col tw-items-center">
					<h1 className="md:tw-text-6xl text-medium tw-font-bold tw-mb-0 tw-mt-20 tw-text-center tw-z-10">
						Impressum
					</h1>
				</div>
				<div className="pannel-size">
					<div className="glass-pannel tw-flex tw-flex-col tw-gap-2">
						<h1 className="tw-font-bold text-medium">
							Verantwortlich für den Inhalt der Seiten
						</h1>
						<p className="text-small">
							Pascal Burri
							<br />
							info@pascal-burri.com
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
