import Image from 'next/image';
import {motion} from 'framer-motion';
import Link from 'next/link';

export default function ProjectCard({project}: {project: Project}) {
	// const imageRef = useRef<HTMLDivElement>(null);
	// const imageFrameRef = useRef<HTMLDivElement>(null);

	// const [imageHeight, setImageHeight] = useState(0);
	// const [imageFrameHeight, setImageFrameHeight] = useState(0);

	// useEffect(() => {
	// 	const updateHeights = () => {
	// 		if (imageRef.current) {
	// 			const rect = imageRef.current.getBoundingClientRect();
	// 			const height = rect.height;
	// 			const width = rect.width;
	// 			setImageHeight(height);
	// 			console.log('Image height:', height);
	// 			console.log('Image width:', width);
	// 		}
	// 	};

	// 	// Call it initially and on window resize
	// 	updateHeights();
	// 	const debouncedUpdateHeights = debounce(updateHeights, 100); // Debounce for performance
	// 	window.addEventListener('resize', debouncedUpdateHeights);

	// 	// Cleanup on component unmount
	// 	return () =>
	// 		window.removeEventListener('resize', debouncedUpdateHeights);
	// }, []);

	return (
		<div className="tw-p-8 tw-z-20 md:tw-h-[600px] tw-w-full project-card">
			<div className="dark:tw-bg-[rgba(32,32,32,0.7)] tw-bg-[rgba(232,232,232,0.7)] tw-shadow-neutral-400 dark:tw-shadow-neutral-950 tw-shadow-lg tw-backdrop-blur-lg tw-rounded-lg tw-h-full tw-w-full">
				<div className="tw-grid sm:tw-grid-cols-3 tw-grid-cols-1 tw-gap-8 tw-p-4 tw-h-full">
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
					<div
						className="tw-col-span-2 tw-overflow-hidden tw-relative tw-h-full tw-rounded-lg tw-shadow-lg"
						// ref={imageFrameRef}
					>
						<Link
							href={project.link}
							className={`tw-w-full tw-h-full tw-pointer-events-none ${project.link === '' ? '' : 'tw-pointer-events-auto'}`}
						>
							<motion.div
								// ref={imageRef}
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
				</div>
			</div>
		</div>
	);
}
