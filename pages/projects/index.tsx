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
								Projekte, an welchen ich gearbeitet habe.
							</p>
						</div>
					</div>
					<div className="tw-relative tw-overflow-x-auto glass-pannel tw-mb-12">
						<table className="tw-w-full tw-text-left tw-text-gray-500 tw-dark:text-gray-400">
							<thead className="tw-text-neutral-900 dark:tw-text-neutral-100 tw-uppercase">
								<tr>
									<th
										scope="col"
										className="tw-px-6 tw-py-3 text-small"
									>
										Projekt
									</th>
									<th
										scope="col"
										className="tw-px-6 tw-py-3 text-small"
									>
										Datum
									</th>
									<th
										scope="col"
										className="tw-px-6 tw-py-3 text-small"
									>
										Beschreibung
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
												{project.date}
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
					<div className="tw-w-full tw-flex tw-flex-col tw-items-center">
						<h1 className="text-large tw-font-bold tw-mb-8 tw-text-center tw-z-10">
							Projekte
						</h1>
					</div>
					<div className="tw-flex tw-flex-col tw-gap-16">
						{[...data.projects.slice(0, -1)].map(
							(project, index) => (
								<div
									key={index}
									className="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-8"
								>
									<div className="tw-col-span-1 tw-z-20">
										<Image
											src={project.image}
											alt="Image of website"
											width={500}
											height={500}
											className="tw-rounded-lg hover:tw-cursor-pointer tw-max-h-[480px]"
											sizes="100vw"
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'cover',
											}}
											onClick={() =>
												window.open(project.link)
											}
										/>
									</div>
									<div className="lg:tw-col-span-3 tw-col-span-1">
										<div className="glass-pannel tw-h-full tw-grid md:tw-grid-cols-3 tw-grid-cols-1">
											<div className="md:tw-col-span-2 tw-col-span-1 tw-flex tw-flex-col">
												<div className="">
													<h1 className="text-medium tw-font-mono tw-mb-4 tw-text-left">
														<a href={project.link}>
															{project.title}
														</a>
													</h1>
												</div>
												<div className="">
													<p className="text-small tw-font-light tw-text-left tw-mb-4">
														{
															project.descriptionLong
														}
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							),
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
