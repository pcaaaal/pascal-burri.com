import Image from 'next/image';
import data from '../../data';
import {motion} from 'framer-motion';
import {ChangeEvent, useState} from 'react';

export default function About() {
	const timelineData = [
		{id: 1, title: 'Step 1', description: 'Description of step 1.'},
		{id: 2, title: 'Step 2', description: 'Description of step 2.'},
		// Add more steps as needed
	];

	return (
		<div className="tw-w-full tw-flex tw-flex-col tw-items-center">
			<h1 className="tw-text-6xl tw-font-bold tw-mb-0 tw-mt-4 tw-text-center tw-z-10">
				Über mich
			</h1>
			<div className="pannel-size tw-z-20 lg:tw-grid xl:tw-gap-8">
				<div className="glass-pannel tw-shadow-2xl 2xl:tw-col-span-3">
					<div className="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 md:tw-gap-8 tw-p-4">
						<div className="lg:tw-col-span-1 md:tw-col-span-2 tw-flex tw-justify-center tw-w-full tw-h-full">
							<Image
								src="/profile.png"
								alt="Picture of Pascal Burri"
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
						<div className="lg:tw-col-span-2 md:w-col-span-1">
							<div className="tw-row-auto">
								<h1 className="tw-text-4xl tw-font-bold tw-mb-4 tw-mt-4 tw-text-left">
									Biografie
								</h1>
							</div>
							<div className="tw-row-auto">
								<p className="tw-text-lg tw-font-light tw-text-left tw-mb-4">
									{data.bio}
								</p>
							</div>
							<div className="tw-row-auto md:tw-hidden lg:tw-grid">
								<div className="tw-row-auto tw-justify-items-start">
									<h1 className="tw-text-3xl tw-font-bold tw-mb-4 tw-text-left">
										Meine Skills
									</h1>
								</div>
								<div className="tw-row-auto tw-text-left tw-flex tw-flex-wrap tw-gap-2">
									{data.skills.map((skill, index) => (
										<div
											key={index}
											className="tw-inline-block dark:tw-bg-[#333] tw-bg-neutral-100 tw-shadow-lg tw-p-2 tw-rounded-lg"
										>
											{skill}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="tw-hidden md:tw-grid tw-p-4 lg:tw-hidden">
						<div className="tw-row-span-3 tw-justify-items-start">
							<h1 className="tw-text-3xl tw-font-bold tw-mb-4 tw-text-left">
								Meine Skills
							</h1>
						</div>
						<div className="tw-row-auto tw-text-left tw-flex tw-flex-wrap tw-gap-2">
							{data.skills.map((skill, index) => (
								<div
									key={index}
									className="tw-inline-block dark:tw-bg-[#333] tw-bg-neutral-100 tw-shadow-lg tw-p-2 tw-rounded-lg"
								>
									{skill}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="tw-flex tw-flex-col tw-items-center tw-py-8">
			<div className="tw-bg-black dark:tw-bg-white tw-h-6 tw-aspect-square tw-rounded-full tw-translate-y-1"></div>
					{/* Vertical line */}
					<div className="tw-bg-black dark:tw-bg-white tw-h-48 tw-w-1 tw-rounded-full"></div>
					{/* Dot */}
					<div className="tw-bg-black dark:tw-bg-white tw-h-6 tw-aspect-square tw-rounded-full -tw-translate-y-1"></div>
				</div>
			</div>
	);
}
