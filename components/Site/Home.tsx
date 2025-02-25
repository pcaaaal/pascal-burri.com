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
		<div className="tw-min-h-screen tw-grid tw-text-center" id="home">
			<div className="tw-align-center tw-justify-center tw-self-end tw-z-10">
				<h1 className="text-xlarge tw-font-bold">
					Pascal Burri
				</h1>
				<h2 className="text-large tw-font-light">
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
						className="tw-w-20 tw-h-20 tw-flex tw-justify-center tw-animate-bounce text-medium tw-mt-20"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							// d="M2 10 L12 16 22 10" this is arrow down
							d="M2 16 H22"
						/>
					</svg>
				}
			</animated.div>
		</div>
	);
};

export default Home;
