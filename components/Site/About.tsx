import Image from 'next/image';
import data from '../../data';
import router from 'next/router';

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
						<p className="text-small">{data.bio}</p>
					</div>
					<div className="tw-col-span-1 md:tw-col-span-2 tw-gap-2 tw-flex tw-flex-wrap">
						{data.skills.map((skill, index) => (
							<div
								key={index}
								className="tw-h-10 tw-inline-block dark:tw-bg-[#333] tw-bg-neutral-100 tw-shadow-lg tw-py-1 tw-px-2 text-small tw-rounded-lg"
							>
								{skill}
							</div>
						))}
					</div>
					<div className="tw-col-span-1 tw-flex tw-justify-center tw-items-center">
						<button
							className="tw-text-center text-medium tw-font-bold tw-w-full tw-p-2 tw-px-4 tw-rounded-2xl tw-shadow-lg dark:tw-text-neutral-900 tw-text-neutral-100 tw-transition dark:tw-bg-neutral-100 tw-bg-neutral-900 tw-duration-200 hover:tw-scale-105 active:tw-scale-95"
							onClick={() => router.push('/about')}
						>
							Mehr über mich
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
