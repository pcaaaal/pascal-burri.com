import Head from 'next/head';
import ProjectCard from '../../components/ProjectCard';
import data from '../../data';
import Image from 'next/image';

export const metadata = {
	title: 'Pascal Burri - Projects',
	description: 'This is a list of projects I have worked on.',
};

export default function Home() {
	const cards = data.projects.map((project) => (
		<ProjectCard key={project.title} project={project} />
	));

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
			<div className="tw-min-h-screen tw-m-0 tw-p-0">
				<div className="tw-w-full tw-flex tw-flex-col tw-items-center">
					<h1 className="text-large tw-font-bold tw-mb-0 tw-mt-20 tw-text-center tw-z-10">
						Projekte
					</h1>
				</div>
				<div className="tw-grid md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-8 tw-p-16">
					<div className="tw-col-span-1">
						<Image
							src="/markus-burri-ch.webp"
							alt="Image of website"
							width={500}
							height={500}
							className="tw-rounded-lg"
							sizes="100vw"
							style={{
								width: '100%',
								height: 'auto',
								objectFit: 'cover',
							}}
						/>
					</div>
					<div className="tw-col-span-1">
						<div className="glass-pannel tw-h-full"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
