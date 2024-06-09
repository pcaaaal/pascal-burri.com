import Image from 'next/image';
import data from '../../data';
import {motion} from 'framer-motion';
import {ChangeEvent, useState} from 'react';

export default function About() {
	return (
		<div className="tw-w-full tw-p-8 tw-z-20 lg:tw-grid xl:tw-gap-8">
			<div className="dark:tw-bg-[rgba(48,48,48,0.5)] tw-bg-[rgba(229,229,229,0.5)] tw-backdrop-blur-lg tw-rounded-lg tw-shadow-lg 2xl:tw-col-span-3">
				<div className="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 md:tw-gap-8 tw-p-4">
					<div className="lg:tw-col-span-1 md:tw-col-span-2 tw-flex tw-justify-center tw-w-full tw-h-full">
						<Image
							src="/profile.png"
							alt="Picture of Pascal Burri"
							layout="responsive"
							width={500}
							height={500}
							className="tw-rounded-lg tw-shadow-lg"
							objectFit="cover"
						/>
					</div>
					<div className="lg:tw-col-span-2 md:w-col-span-1">
						<div className="tw-row-auto">
							<h1 className="tw-text-4xl tw-font-bold tw-mb-4 tw-mt-4 tw-text-left">
								Über mich
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
										className="tw-inline-block dark:tw-bg-[#333] tw-bg-neutral-100 tw-text-black tw-shadow-lg dark:tw-text-white tw-p-2 tw-rounded-lg"
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
								className="tw-inline-block dark:tw-bg-[#333] tw-bg-neutral-100 tw-text-black tw-shadow-lg dark:tw-text-white tw-p-2 tw-rounded-lg"
							>
								{skill}
							</div>
						))}
					</div>
				</div>
			</div>
			{/* <div className="dark:tw-bg-[rgba(48,48,48,0.5)] tw-bg-[rgba(229,229,229,0.5)] tw-backdrop-blur-lg tw-p-4 tw-rounded-lg tw-shadow-lg xl:tw-col-span-1 tw-hidden 2xl:tw-grid tw-grid-rows-5">
				<div className="tw-row-span-1">
					<h1 className="tw-text-6xl tw-font-bold tw-text-left">
						Sag Hallo!
					</h1>
				</div>
				<div className="tw-text-left tw-w-full tw-h-full tw-row-span-4">
					<form
						className="tw-flex tw-flex-col tw-gap-2"
						onSubmit={handleSubmit}
					>
						<label
							htmlFor="email"
							className="tw-text-lg tw-font-medium"
						>
							Dein Name:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="tw-rounded-xl tw-py-2 tw-px-3 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-violet-600 tw-text-black"
							placeholder="Max Mustermann"
						/>
						<label
							htmlFor="name"
							className="tw-text-lg tw-font-medium"
						>
							Deine E-Mail-Adresse:
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="tw-rounded-xl tw-py-2 tw-px-3 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-violet-600 tw-text-black"
							placeholder="max-mustermann@mail.com"
						/>
						<label
							htmlFor="message"
							className="tw-text-lg tw-font-medium"
						>
							Deine Nachricht:
						</label>
						<textarea
							id="message"
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="tw-rounded-xl tw-py-2 tw-px-3 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-violet-600 tw-text-black"
							placeholder="Hallo Pascal, ich benötige eine Webseite für..."
							rows={4}
						></textarea>
						<div className="tw-text-left tw-w-full tw-h-full tw-row-span-1">
							<div className="tw-px-4">
								<button
									type="submit"
									className="tw-text-center tw-text-4xl tw-font-bold dark:tw-bg-neutral-100 tw-bg-neutral-900 tw-p-2 tw-rounded-2xl tw-shadow-lg dark:tw-text-black tw-text-white tw-w-full tw-h-full tw-mt-4 tw-mb-4 tw-transition tw-duration-200 hover:tw-scale-105 active:tw-scale-95"
								>
									Abschicken
								</button>
							</div>
						</div>
					</form>
				</div>
			</div> */}
		</div>
	);
}
