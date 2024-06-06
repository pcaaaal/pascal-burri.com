import Image from 'next/image';
import ProjectCard from '../ProjectCard';
import data from '../../data';
import {motion} from 'framer-motion';

export default function Projects() {
	// Assuming each ProjectCard has a fixed width, for example, 300px
	// and you want the scrolling to take 30 seconds to complete one cycle
	const cardWidth = 1024; // Width of a single ProjectCard
	const gap = 16; // Assuming there's a 16px gap between cards
	const totalWidth = data.projects.length * (cardWidth + gap); // Total width of all cards plus gaps
	const scrollDuration = 30; // Duration of the scroll animation in seconds

	return (
		<div style={{overflowX: 'hidden'}}>
			<motion.div
				className="tw-flex tw-overflow-x-scroll"
				style={{
					width: `${totalWidth}px`, // Set the total width to allow for horizontal scrolling
				}}
				animate={{
					x: [-totalWidth, 0], // Animate from full width to 0 to create a scrolling effect
				}}
				transition={{
					repeat: Infinity,
					repeatType: 'loop',
					duration: scrollDuration, // Set the duration of the animation
					ease: 'linear', // Use a linear animation to ensure smooth scrolling
				}}
			>
				{data.projects.map((project, index) => (
					<div
						key={index}
						style={{
							minWidth: `${cardWidth}px`,
							marginRight: `${gap}px`,
						}}
					>
						<ProjectCard project={project} />
					</div>
				))}
			</motion.div>
		</div>
	);
}
