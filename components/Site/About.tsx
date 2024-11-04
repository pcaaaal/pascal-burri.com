import Image from 'next/image';
import data from '../../data';
import router from 'next/router';
import {a} from 'react-spring';

export default function About() {
	return (
		<div className="tw-w-full tw-flex tw-flex-col tw-items-center">
			<h1 className="text-large tw-font-bold tw-mb-0 tw-mt-4 tw-text-center tw-z-10">
				Über mich
			</h1>
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
						<h1 className="text-medium tw-font-bold">Biografie</h1>
						<div className="tw-flex tw-h-full tw-flex-col tw-gap-2 tw-justify-between">
							<p className="text-small">{data.bio}</p>
							<button
								className="button-large tw-w-full"
								onClick={() => router.push('/about')}
							>
								Mehr über mich
							</button>
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
						].map((skill, index, arr) => (
							<li
								key={index}
								className=" tw-flex tw-justify-center tw-items-center dark:tw-bg-[#333] tw-bg-neutral-100 tw-shadow-lg tw-h-12 tw-py-2 tw-px-4 text-small tw-rounded-lg"
								{...(index === arr.length - 1
									? {
											onClick: () =>
												router.push('/about/skills'),
											style: {cursor: 'pointer'},
										}
									: {})}
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
				<div className="tw-bg-neutral-900 dark:tw-bg-neutral-100 tw-h-6 tw-aspect-square tw-rounded-full tw-translate-y-1"></div>
				<div className="tw-bg-neutral-900 dark:tw-bg-neutral-100 tw-h-48 tw-w-1 tw-rounded-full"></div>
				<div className="tw-bg-neutral-900 dark:tw-bg-neutral-100 tw-h-6 tw-aspect-square tw-rounded-full -tw-translate-y-1"></div>
			</div>
		</div>
	);
}
