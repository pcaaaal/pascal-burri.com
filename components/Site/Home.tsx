import {animate} from 'framer-motion';
import {FunctionComponent, use, useEffect, useState} from 'react';
import {Transition, animated} from 'react-spring';

const Home: FunctionComponent = () => {
	const [showArrow, setShowArrow] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setShowArrow(false);
			} else {
				setShowArrow(true);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="tw-h-[100vh] tw-grid tw-text-center" id="home">
			<div className="tw-align-center tw-justify-center tw-self-end">
				<h1 className="md:tw-text-9xl tw-text-8xl tw-font-bold">
					Pascal Burri
				</h1>
				<h2 className="md:tw-text-5xl tw-text-4xl tw-font-light">
					Developer
				</h2>
			</div>
			<animated.div
				className="tw-justify-center tw-items-end tw-flex"
				style={
					showArrow
						? {
								opacity: 1,
								transition: 'opacity 0.5s',
							}
						: {
								opacity: 0,
								transition: 'opacity 0.5s',
							}
				}
			>
				{
					<svg
						className="tw-w-20 tw-h-20 tw-flex tw-justify-center tw-animate-bounce tw-text-4xl tw-mt-20"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M2 16 H22"
						/>
					</svg>
				}
			</animated.div>
		</div>
	);
};

export default Home;
