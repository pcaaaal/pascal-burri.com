import ProjectCard from '../ProjectCard';
import data from '../../data';
import {useRouter} from 'next/navigation';
import Carousel, {ArrowProps, ButtonGroupProps} from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Button} from '@react-email/components';
import {on} from 'events';
import {use, useEffect, useState} from 'react';

export default function Projects() {
	const router = useRouter();
	const [screenSize, setScreenSize] = useState(0);

	// Create an array of cards
	const cards = data.projects.map((project) => (
		<ProjectCard key={project.title} project={project} />
	));

	useEffect(() => {
		setScreenSize(window ? window.innerWidth : 0);
	}, []);

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
						className="tw-h-8 tw-w-8"
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
				{/* <button
					className="tw-text-center tw-text-4xl tw-font-bold dark:tw-bg-neutral-100 tw-bg-neutral-900 tw-px-4 tw-py-2 tw-rounded-2xl tw-shadow-lg dark:tw-text-black tw-text-white tw-my-4 tw-transition tw-duration-200 hover:tw-scale-105 active:tw-scale-95"
					onClick={() => router.push('/projects')}
				>
					Alle Projekte
				</button> */}
				<button
					className="hover:tw-cursor-pointer tw-transition tw-duration-100 hover:tw-scale-110 active:tw-scale-95"
					onClick={next}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="tw-h-8 tw-w-8 hover:tw-cursor-pointer hover:tw-scale-105 active:tw-scale-95"
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
			<div className="tw-w-full">
				<h1 className="tw-text-6xl tw-font-bold tw-mb-0 tw-mt-4 tw-text-center">
					Projekte
				</h1>
			</div>
			<Carousel
				additionalTransfrom={0}
				arrows={false}
				customButtonGroup={<ButtonGroup />}
				renderButtonGroupOutside
				autoPlaySpeed={3000}
				// autoPlay
				infinite
				centerMode={screenSize > 1900}
				partialVisible={screenSize <= 1900}
				itemClass=""
				keyBoardControl
				minimumTouchDrag={80}
				renderArrowsWhenDisabled={false}
				renderDotsOutside={false}
				responsive={{
					big: {
						breakpoint: {
							max: 3000,
							min: 2048,
						},
						items: 1,
					},
					desktop: {
						breakpoint: {
							max: 2048,
							min: 1444,
						},
						items: 1,
						partialVisibilityGutter: 400,
					},
					laptop: {
						breakpoint: {
							max: 1444,
							min: 767,
						},
						items: 1,
						partialVisibilityGutter: 0,
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
				className=""
			>
				{cards}
			</Carousel>
			<div className="tw-flex tw-flex-col tw-items-center tw-justify-center md:tw-hidden">
				{cards}
			</div>
		</div>
	);
}
