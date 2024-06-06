import {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import data from '../data';

export default function ProjectCard({project}: {project: Project}) {
	const imageRef = useRef<HTMLDivElement>(null);
	const imageFrameRef = useRef<HTMLDivElement>(null);
	const [imageHeight, setImageHeight] = useState(0);
	const [imageFrameHeight, setImageFrameHeight] = useState(0);

	useEffect(() => {
		if (imageRef.current) {
			const height = imageRef.current.offsetHeight;
			setImageHeight(height);
      console.log('image',imageHeight);
		}
		if (imageFrameRef.current) {
			const height = imageFrameRef.current.offsetHeight;
			setImageFrameHeight(height);
      console.log('imageframe',imageFrameHeight);
		}
	}, [ imageFrameHeight, imageHeight]);

	return (
		<div className="tw-p-8 tw-z-20 tw-h-[480px] tw-max-w-[1024px]">
			<div className="dark:tw-bg-[rgba(48,48,48,0.5)] tw-bg-[rgba(229,229,229,0.5)] tw-backdrop-blur-lg tw-rounded-lg tw-shadow-lg tw-h-full tw-w-full">
				<div className="tw-grid lg:tw-grid-cols-3 tw-grid-cols-1 tw-gap-8 tw-p-4 tw-h-full">
					<div className="tw-col-span-1">
						<div className="tw-row-auto">
							<h1 className="tw-text-4xl tw-font-bold tw-mb-4 tw-text-left">
								{project.title}
							</h1>
						</div>
						<div className="tw-row-auto">
							<p className="tw-text-lg tw-font-light tw-text-left tw-mb-4">
								{project.description}
							</p>
						</div>
					</div>
						<div className="tw-col-span-2 tw-overflow-hidden tw-relative tw-h-full tw-rounded-lg tw-shadow-lg" ref={imageFrameRef}>
							<motion.div
								whileHover={{y: - (imageHeight - imageFrameHeight)}}
								transition={{type: 'tween', duration: 1}}
							>
								<div ref={imageRef}>
									<Image
										src={project.image}
										alt={project.title}
										layout="responsive"
										width={500}
										height={500}
										objectFit="cover"
										objectPosition="top"
									/>
								</div>
							</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
