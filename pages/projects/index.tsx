import Head from 'next/head';
import Image from 'next/image';
import data from '../../data';

export const metadata = {
	title: 'Pascal Burri - Projects',
	description: 'This is a list of projects I have worked on.',
};

export default function Home() {
	return (
		<div>
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</Head>
			<div className="tw-min-h-screen tw-m-0 tw-p-0  tw-flex tw-flex-col tw-items-center">
				<div className="tw-w-full tw-flex tw-flex-col tw-items-center">
					<h1 className="text-large tw-font-bold tw-mb-0 tw-mt-20 tw-text-center tw-z-10">
						Projekte
					</h1>
				</div>
				<div className="pannel-size">
					<div className="glass-pannel tw-mb-8">
						<div className="">
							<h1 className="text-medium tw-mb-4 tw-text-left tw-font-bold">
								Alle Projekte
							</h1>
						</div>
						<div className="">
							<p className="text-small tw-font-light tw-text-left tw-mb-4">
								Hier findest du eine Übersicht über alle
								Projekte, an welchen ich gearbeitet habe. Klicke
								auf das Bild, um zur Website des Projekts zu
								gelangen. Die Projekte sind Chronologisch
								sortiert, das neuste Projekt ist immer oben.
							</p>
						</div>
					</div>
					<div className="tw-relative tw-overflow-x-auto glass-pannel tw-mb-16">
						<table className="tw-w-full tw-text-left tw-text-gray-500 tw-dark:text-gray-400">
							<thead className="tw-text-neutral-900 dark:tw-text-neutral-100 tw-uppercase">
								<tr>
									<th
										scope="col"
										className="tw-px-6 tw-py-3 text-small"
									>
										Project
									</th>
									<th
										scope="col"
										className="tw-px-6 tw-py-3 text-small"
									>
										Date
									</th>
									<th
										scope="col"
										className="tw-px-6 tw-py-3 text-small"
									>
										Description
									</th>
								</tr>
							</thead>
							<tbody>
								{data.projects.map((project, index) => (
									<tr
										key={index}
										className="tw-border-b tw-border-neutral-200 dark:tw-border-neutral-700"
									>
										<td className="tw-px-6 tw-py-4">
											<div className="tw-flex tw-items-center">
												<div className="tw-ml-4">
													<div className="tw-text-sm tw-font-medium tw-text-neutral-900 dark:tw-text-neutral-100">
														{project.title}
													</div>
												</div>
											</div>
										</td>
										<td className="tw-px-6 tw-py-4">
											<div className="tw-text-sm tw-text-neutral-900 dark:tw-text-neutral-100">
												10.10.2024
											</div>
										</td>
										<td className="tw-px-6 tw-py-4">
											<div className="tw-text-sm tw-text-neutral-900 dark:tw-text-neutral-100">
												{project.description}
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-8">
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
								onClick={() =>
									window.open(
										'https://markus-burri-ch-new.vercel.app',
									)
								}
							/>
						</div>
						<div className="lg:tw-col-span-3 tw-col-span-1">
							<div className="glass-pannel tw-h-full tw-grid md:tw-grid-cols-3 tw-grid-cols-1">
								<div className="md:tw-col-span-2 tw-col-span-1 tw-flex tw-flex-col">
									<div className="">
										<h1 className="text-medium tw-font-mono tw-mb-4 tw-text-left">
											https://markus-burri.ch
										</h1>
									</div>
									<div className="">
										<p className="text-small tw-font-light tw-text-left tw-mb-4">
											Dies war mein erstes Projekt,
											welches ich von einem
											&quot;Privatkunden&quot; erhalten
											habe. Es handelt sich um eine
											einfache Gallerie für die Flugbilder
											meines Vaters. Für diese Seite habe
											ich ein Template von Vercel für die
											Gallerie verwendet, es auf meine
											Bedürfnisse angepasst und den Rest
											der Website designed und entwickelt.
											Die Seite wurde mit Next.js und
											TailwindCSS erstellt, und wird auf
											Vercel gehostet.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
