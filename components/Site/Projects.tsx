import ProjectCard from '../ProjectCard';
import data from '../../data';
import {useRouter} from 'next/navigation';
import Carousel, {ArrowProps, ButtonGroupProps} from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Button} from '@react-email/components';
import {on} from 'events';

export default function Projects() {
	const router = useRouter();

	// Create an array of cards
	const cards = data.projects.map((project) => (
		<ProjectCard key={project.title} project={project} />
	));

	const ButtonGroup = ({
		next,
		previous,
		goToSlide,
		...rest
	}: ButtonGroupProps) => {
		return (
			<div className="carousel-button-group tw-flex tw-gap-8 tw-justify-center">
				<button
					className="hover:tw-cursor-pointer tw-transition tw-duration-100 hover:tw-scale-110 active:tw-scale-95"
					onClick={previous}
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
					onClick={next}
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
		);
	};

	return (
		<div>
			<Carousel
				additionalTransfrom={0}
				arrows={false}
				customButtonGroup={<ButtonGroup />}
				renderButtonGroupOutside
				autoPlaySpeed={3000}
				autoPlay
				infinite
				centerMode
				itemClass=""
				keyBoardControl
				minimumTouchDrag={80}
				renderArrowsWhenDisabled={false}
				renderDotsOutside={false}
				responsive={{
					desktop: {
						breakpoint: {
							max: 3000,
							min: 1024,
						},
						items: 1,
					},
					mobile: {
						breakpoint: {
							max: 464,
							min: 0,
						},
						items: 1,
					},
					tablet: {
						breakpoint: {
							max: 1024,
							min: 464,
						},
						items: 1,
					},
				}}
				rewind={false}
				rewindWithAnimation={false}
				rtl={false}
				shouldResetAutoplay
				showDots={false}
				sliderClass=""
				slidesToSlide={1}
				swipeable
			>
				{cards}
			</Carousel>
			<div className="tw-flex tw-justify-center"></div>
		</div>
	);
}
