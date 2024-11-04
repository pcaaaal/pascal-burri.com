import Head from 'next/head';
import Image from 'next/image';
import data from '../../../data';

export const metadata = {
	title: 'Pascal Burri - Skills',
	description: 'This is a list of my skills',
};

export default function Home() {
	return (
		<div>
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</Head>
			<div className="tw-min-h-screen tw-m-0 tw-p-0 tw-flex tw-flex-col tw-items-center">
				<div className="tw-w-full tw-flex tw-flex-col tw-items-center">
					<h1 className="text-large tw-font-bold tw-mb-0 tw-mt-20 tw-text-center tw-z-10">
						Skills
					</h1>
				</div>
				<div className="pannel-size">
					<ul className="tw-col-span-1 md:tw-col-span-2 tw-gap-4 tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 2xl:tw-grid-cols-4">
						{data.skills.map((skill, index) => (
							<div key={index}>
								<li className="glass-pannel tw-z-20">
									<p className="tw-text-sm tw-mb-2">
										{skill.type}
									</p>
									<h1 className="tw-font-bold text-medium">
										{skill.title}
									</h1>
									<p className="text-small tw-mb-2">
										{skill.description}
									</p>
									<ul className="tw-flex tw-flex-wrap tw-gap-2 tw-mb-4">
										{skill.keywords.map((keyword, i) => (
											<li
												key={i}
												className="dark:tw-bg-[#333] tw-bg-neutral-100 tw-shadow-lg tw-py-1 tw-px-2 tw-rounded-lg"
											>
												{keyword}
											</li>
										))}
									</ul>
									<a
										href={skill.link}
										className="tw-underline text-small"
									>
										Mehr erfahren
									</a>
								</li>
								{index % 7 === 0 ? (
									<div className="blob tw-flex tw-absolute tw-h-[300px] tw-aspect-square tw-z-0 tw-rounded-full tw-blur-3xl tw-right-9"></div>
								) : null}
							</div>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
