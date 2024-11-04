import Head from 'next/head';
import Image from 'next/image';
import data from '../../data';
import router from 'next/router';

export const metadata = {
	title: 'Pascal Burri - About',
	description: 'This is a page about me.',
};

const timelineData = [
	{
		date: 'August 2023',
		title: 'Start der Lehre',
		description:
			'Ich habe im August 2023 meine Lehre als Informatiker bei der Swisscom angefangen.',
	},
	{
		date: 'August 2023',
		title: 'Backend Entwickler beim AppsTeam',
		description:
			'Dies war mein erstes Projekt bei der Swisscom. Hier habe ich Backend mit NestJS gelernt.',
	},
	{
		date: 'Februar 2024',
		title: 'Fullstack Entwickler bei Tobias Meier',
		description:
			'In diesem Projekt habe ich als Backend und Frontend Entwickler mit einem Team von anderen Lernenden eine Webapplikation entwickelt.',
	},
	{
		date: 'Ausust 2024',
		title: 'Netzwerk und Automatisierung bei DCN',
		description:
			'Ich habe die Grundlagen von Routing und Switching gelernt und Pipelines automatisiert.',
	},
];

export default function Home() {
	return (
		<div>
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</Head>
			<div className="tw-min-h-screen tw-p-0 tw-m-0 tw-flex tw-flex-col tw-items-center">
				<div className="tw-w-full tw-flex tw-flex-col tw-items-center">
					<h1 className="text-large tw-font-bold tw-mb-0 tw-mt-20 tw-text-center tw-z-10">
						About
					</h1>
				</div>
				<div className="pannel-size tw-z-20">
					<div className="glass-pannel tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-4">
						<div className="tw-col-span-1 md:max-lg:tw-col-span-2 md:tw-grid">
							<Image
								src="/profile.webp"
								alt="Picture of Pascal Burri"
								width={500}
								height={500}
								className="tw-rounded-lg"
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
								}}
							/>
						</div>
						<div className="tw-col-span-1 lg:tw-col-span-2 tw-flex tw-flex-col tw-gap-2">
							<h1 className="text-medium tw-font-bold">
								Biografie
							</h1>
							<div className="tw-flex tw-h-full tw-flex-col tw-gap-2 tw-justify-between">
								<p className="text-small">{data.bio}</p>
							</div>
						</div>
						<ul className="tw-col-span-1 md:tw-col-span-2 tw-gap-2 tw-flex tw-flex-wrap">
							{[
								...data.skills.slice(0, 10),
								{
									title: '...',
									description: '',
									link: '',
									type: '',
									keywords: [],
								},
							].map((skill, index) => (
								<li
									key={index}
									className=" tw-flex tw-justify-center tw-items-center dark:tw-bg-[#333] tw-bg-neutral-100 tw-shadow-lg tw-h-12 tw-py-2 tw-px-4 text-small tw-rounded-lg"
								>
									{skill.title}
								</li>
							))}
						</ul>
						<div className="tw-col-span-1 tw-flex tw-flex-col tw-gap-4 tw-justify-center tw-items-center">
							<button
								className="button-large tw-h-full tw-w-full"
								onClick={() => router.push('/about/skills')}
							>
								Skills
							</button>
						</div>
					</div>
				</div>
				<div className="tw-flex tw-flex-col tw-items-center tw-py-8 tw-z-20">
					<h1 className="text-large tw-font-bold tw-mb-8 tw-text-center tw-z-10">
						Timeline
					</h1>
					<div className="pannel-size tw-flex tw-justify-center tw-gap-8">
						<div>
							<div className="tw-bg-neutral-900 dark:tw-bg-neutral-100 tw-h-full tw-w-1 tw-rounded-full tw-flex tw-flex-col tw-gap-48"></div>
						</div>
						<div>
							<div className="tw-flex tw-flex-col tw-gap-16">
								{timelineData.map((data, index) => (
									<div
										key={index}
										className="tw-flex -tw-translate-x-[46px] tw-gap-8 tw-z-20"
									>
										<div className="tw-bg-neutral-900 dark:tw-bg-neutral-100 tw-aspect-square tw-h-6 tw-rounded-full"></div>
										<div className="glass-pannel">
											<p className="tw-text-sm">
												{data.date}
											</p>
											<h1 className="tw-text-2xl tw-font-bold">
												{data.title}
											</h1>
											<p className="text-small">
												{data.description}
											</p>
										</div>
									</div>
								))}
							</div>
							<div className="blob tw-flex tw-absolute tw-h-[300px] tw-aspect-square tw-z-0 tw-rounded-full tw-blur-3xl tw-left-9"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
