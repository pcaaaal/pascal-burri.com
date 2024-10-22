import Image from 'next/image';
import {motion} from 'framer-motion';
import Link from 'next/link';

export default function ProjectCard({project}: {project: Project}) {
	return (
		<div className="md:tw-p-8 tw-py-10 tw-px-8 md:tw-px-16 lg:tw-px-12 xl:tw-px-24 2xl:tw-px-48 tw-z-20 tw-max-w-[2000px] md:tw-h-[500px] lg:tw-h-[600px] xl:tw-h-[800px] project-card">
			<div className="glass-pannel tw-shadow-lg tw-h-full tw-w-full">
				<div className="tw-grid sm:tw-grid-cols-3 tw-grid-cols-1 tw-gap-8 tw-p-4 tw-h-full">
					<div className="tw-col-span-2 tw-overflow-hidden tw-relative tw-h-full tw-rounded-lg">
						<Link
							href={project.link}
							className={`tw-w-full tw-h-full tw-pointer-events-none ${project.link === '' ? '' : 'tw-pointer-events-auto'}`}
						>
							<motion.div
								whileHover={
									project.scroll ? {y: -100} : undefined
								}
								transition={{type: 'tween', duration: 1}}
							>
								<Image
									src={project.image}
									alt={project.title}
									width={500}
									height={500}
									sizes="100vw"
									style={{
										width: '100%',
										height: 'auto',
										objectFit: 'cover',
									}}
								/>
							</motion.div>
						</Link>
					</div>
					<div className="tw-col-span-1">
						<div className="tw-row-auto">
							<h1 className="text-medium tw-font-bold tw-mb-4 tw-text-left">
								{project.title}
							</h1>
						</div>
						<div className="tw-row-auto">
							<p className="text-small tw-font-light tw-text-left tw-mb-4">
								{project.description}
							</p>
						</div>
						<div className="tw-row-auto">
							<div className="tw-flex tw-flex-wrap tw-gap-2 tw-mb-4">
								{project.languages.map((language, index) => (
									<div
										key={index}
										className="tw-inline-block dark:tw-bg-[#333] tw-bg-neutral-100 tw-shadow-lg tw-p-2 tw-rounded-lg"
									>
										{language}
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
