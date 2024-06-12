import Image from 'next/image';
import ProjectCard from '../ProjectCard';
import data from '../../data';
import {motion, useAnimation} from 'framer-motion';
import {useRouter} from 'next/navigation';
import {useEffect, useRef, useState} from 'react';
import {off} from 'process';

export default function Projects() {
	const router = useRouter();
	const controls = useAnimation();

	const [offset, setOffset] = useState(1);

	const cardRef = useRef<HTMLDivElement>(null);

	const cardWidth = cardRef.current?.offsetWidth || 0;

	const autoScrollTimeout = 5000;

	// Create an array of cards
	const cards = data.projects.map((project) => (
		<ProjectCard key={project.title} project={project} />
	));

	const handleScroll = (direction: 1 | -1) => {
		const newOffset = offset + direction;
		if (newOffset < 0) {
			setOffset(cards.length - 1);
		} else if (newOffset >= cards.length) {
			setOffset(0);
		} else {
			setOffset(newOffset);
		}
	};

	console.log(offset);

	const startOffset = (cardWidth + 16) * cards.length;

	const pseudoCards = [...cards, ...cards, ...cards];

	useEffect(() => {
		controls.start({
			x: -offset * (cardWidth + 16)	- startOffset,
			transition: {duration: 0.5, ease: 'easeInOut'},
		});
	}, [offset, controls, cardWidth, startOffset]);

	useEffect(() => {
		if (offset >= cards.length + 2) {
			setOffset(1);
			controls.start({
				x: -1 * (cardWidth + 16) - startOffset,
				transition: {duration: 0.5, ease: 'easeInOut'},
			});
		}
	}, [offset, controls, cards.length, cardWidth, startOffset]);

	return (
		<div>
			<div className="tw-w-full">
				<motion.div className="tw-flex" animate={controls}>
					{pseudoCards.map((card, index) => (
						<div key={index} className="tw-mr-4" ref={cardRef}>
							{card}
						</div>
					))}
				</motion.div>
			</div>
			<div className="tw-flex tw-justify-center tw-gap-8">
				<button
					className="hover:tw-cursor-pointer tw-transition tw-duration-100 hover:tw-scale-110 active:tw-scale-95"
					onClick={() => handleScroll(-1)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="tw-h-8 tw-w-8 tw-text-black dark:tw-text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						style={{transform: 'rotate(-90deg)'}}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 10l7-7m0 0l7 7m-7-7v18"
						/>
					</svg>
				</button>
				<button
					className="tw-text-center tw-text-4xl tw-font-bold dark:tw-bg-neutral-100 tw-bg-neutral-900 tw-px-4 tw-py-2 tw-rounded-2xl tw-shadow-lg dark:tw-text-black tw-text-white tw-my-4 tw-transition tw-duration-200 hover:tw-scale-105 active:tw-scale-95"
					onClick={() => router.push('/projects')}
				>
					Alle Projekte
				</button>
				<button
					className="hover:tw-cursor-pointer tw-transition tw-duration-100 hover:tw-scale-110 active:tw-scale-95"
					onClick={() => handleScroll(1)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="tw-h-8 tw-w-8 tw-text-black dark:tw-text-white hover:tw-cursor-pointer hover:tw-scale-105 active:tw-scale-95"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						style={{transform: 'rotate(90deg)'}}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 10l7-7m0 0l7 7m-7-7v18"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}
