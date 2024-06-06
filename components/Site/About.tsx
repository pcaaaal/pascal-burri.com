import Image from 'next/image';
import data from '../../data';

export default function About() {
	return (
		<div className="tw-w-full tw-p-8 tw-z-20">
			<div className="dark:tw-bg-[rgba(48,48,48,0.5)] tw-bg-[rgba(229,229,229,0.5)] tw-backdrop-blur-lg tw-rounded-lg tw-shadow-lg">
				<div className="tw-grid lg:tw-grid-cols-3 tw-grid-cols-1 tw-gap-8 tw-p-4">
					<div className="tw-col-span-1 tw-flex tw-justify-center tw-w-full">
						<Image
							src="/profile.png"
							alt="Picture of Pascal Burri"
							layout="responsive"
							width={500}
							height={500}
							className="tw-rounded-lg tw-shadow-lg"
						/>
					</div>
					<div className="tw-col-span-2">
						<div className="tw-row-auto">
							<h1 className="tw-text-4xl tw-font-bold tw-mb-4 tw-text-left">
								About Me
							</h1>
						</div>
						<div className="tw-row-auto">
							<p className="tw-text-lg tw-font-light tw-text-left tw-mb-4">
								{data.bio}
							</p>
						</div>
						<div className="tw-row-auto">
							<div className="tw-row-auto tw-justify-items-start">
								<h1 className="tw-text-3xl tw-font-bold tw-mb-4 tw-text-left">
									My Skills
								</h1>
							</div>
							<div className="tw-row-auto tw-text-left tw-flex tw-flex-wrap tw-gap-2">
								{data.skills.map((skill, index) => (
									<div
										key={index}
										className="tw-inline-block dark:tw-bg-[#333] tw-bg-neutral-100 tw-text-black tw-shadow-lg dark:tw-text-white tw-p-2 tw-rounded-lg"
									>
										{skill}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
