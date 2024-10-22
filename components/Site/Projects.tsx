import ProjectCard from '../ProjectCard';
import data from '../../data';
import {useRouter} from 'next/navigation';
import Carousel, {ButtonGroupProps} from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useLayoutEffect, useState} from 'react';
import {partial} from 'lodash';

export default function Projects() {
	const router = useRouter();
	const [screenSize, setScreenSize] = useState<number>(0);

	const updateScreenSize = () => {
		setScreenSize(window.innerWidth);
	};

	useLayoutEffect(() => {
		updateScreenSize();

		const handleResize = () => {
			updateScreenSize();
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const cards = data.projects.map((project) => (
		<ProjectCard key={project.title} project={project} />
	));

	const ButtonGroup = ({next, previous}: ButtonGroupProps) => {
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

	const carouselSettings = {
		additionalTransfrom: 0,
		arrows: false,
		customButtonGroup: <ButtonGroup />,
		renderButtonGroupOutside: true,
		autoPlay: false,
		infinite: true,
		centerMode: false,
		partialVisible: true,
		itemClass: 'tw-flex tw-justify-center',
		keyBoardControl: true,
		minimumTouchDrag: 80,
		renderArrowsWhenDisabled: false,
		renderDotsOutside: false,
		responsive: {
			big: {
				breakpoint: {
					max: screenSize,
					min: 767,
				},
				items: 1,
				partialVisibilityGutter: 0,
			},
		},
		rewind: false,
		rewindWithAnimation: false,
		rtl: false,
		shouldResetAutoplay: true,
		showDots: false,
		sliderClass: '',
		slidesToSlide: 1,
		swipeable: true,
	};

	return (
		<div className="tw-flex tw-flex-col">
			<h1 className="text-large tw-font-bold tw-mb-0 tw-mt-4 tw-text-center tw-z-10">
				Projekte
			</h1>
			<div className="tw-hidden md:tw-flex md:tw-flex-col">
				<Carousel {...carouselSettings}>{cards}</Carousel>
			</div>
			<div className="tw-flex tw-flex-col tw-items-center tw-justify-center md:tw-hidden">
				{cards}
			</div>
			<div className="tw-text-center tw-z-20">
				<button
					className="tw-text-center text-medium tw-font-bold tw-p-2 tw-mt-4 tw-mb-2 tw-px-4 tw-rounded-2xl tw-shadow-lg dark:tw-text-neutral-900 tw-text-neutral-100 tw-transition dark:tw-bg-neutral-100 tw-bg-neutral-900 tw-duration-200 hover:tw-scale-105 active:tw-scale-95"
					onClick={() => router.push('/projects')}
				>
					Alle Projekte
				</button>
			</div>
		</div>
	);
}
