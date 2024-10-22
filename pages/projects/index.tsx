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
				<div className='pannel-size'>
					<div className='glass-pannel'>
					<div className=''>
									<h1 className="text-medium tw-mb-4 tw-text-left">
										Alle Projekte
									</h1>
								</div>
								<div className="">
									<p className="text-small tw-font-light tw-text-left tw-mb-4">
										Hier findest du eine Übersicht über alle Projekte, an welchen ich gearbeitet habe. Klicke auf das Bild, um zur Website des Projekts zu gelangen. Die Projekte sind Chronologisch sortiert, das neuste Projekt ist immer oben.
									</p>
								</div>
					</div>
				</div>
				<div className="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-8 pannel-size">
					<div className="tw-col-span-1 tw-z-20">
						<Image
							src="/markus-burri-ch.webp"
							alt="Image of website"
							width={500}
							height={500}
							className="tw-rounded-lg hover:tw-cursor-pointer"
							sizes="100vw"
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
							}}
							onClick={() => window.open('https://markus-burri-ch-new.vercel.app')}
						/>
					</div>
					<div className="lg:tw-col-span-3 tw-col-span-1">
						<div className="glass-pannel tw-h-full tw-grid md:tw-grid-cols-3 tw-grid-cols-1">
							<div className='md:tw-col-span-2 tw-col-span-1 tw-flex tw-flex-col'>
								<div className=''>
									<h1 className="text-medium tw-font-mono tw-mb-4 tw-text-left">
										https://markus-burri.ch
									</h1>
								</div>
								<div className="">
									<p className="text-small tw-font-light tw-text-left tw-mb-4">
										Dies war mein erstes Projekt, welches ich von einem &quot;Privatkunden&quot; erhalten habe. Es handelt sich um eine einfache Gallerie für die Flugbilder meines Vaters. Für diese Seite habe ich ein Template von Vercel für die Gallerie verwendet, es auf meine Bedürfnisse angepasst und den Rest der Website designed und entwickelt.
										Die Seite wurde mit Next.js und TailwindCSS erstellt, und wird auf Vercel gehostet.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
