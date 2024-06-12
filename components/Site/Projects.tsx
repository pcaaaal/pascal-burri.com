import Image from 'next/image';
import ProjectCard from '../ProjectCard';
import data from '../../data';
import {motion} from 'framer-motion';
import {useRouter} from 'next/navigation';

export default function Projects() {
	const router = useRouter();
	const scrollDuration = 20;

	const card = <div className=" tw-bg-red-600 tw-h-60 tw-w-96">Card</div>;

	// Create an array of cards
	const cards = data.projects.map((project) => (
		<ProjectCard key={project.title} project={project} />
	));

	// Duplicate the cards
	const allCards = [...cards, ...cards];

	return (
		<div>
			<div className="tw-w-full">
				<motion.div
					className="tw-flex"
					animate={{
						x: ['0%', '-100%'],
					}}
					transition={{}}
				>
					{allCards.map((card, index) => (
						<div key={index} className="tw-mr-4">
							{card}
						</div>
					))}
				</motion.div>
			</div>
			<div className=" tw-text-center">
				<button
					type="submit"
					className="tw-text-center tw-text-4xl tw-font-bold dark:tw-bg-neutral-100 tw-bg-neutral-900 tw-px-4 tw-py-2 tw-rounded-2xl tw-shadow-lg dark:tw-text-black tw-text-white tw-my-4 tw-transition tw-duration-200 hover:tw-scale-105 active:tw-scale-95"
					onClick={() => router.push('/projects')}
				>
					Alle Projekte
				</button>
			</div>
		</div>
	);
}
