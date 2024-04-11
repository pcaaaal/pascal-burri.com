import {FunctionComponent, PropsWithChildren, useEffect, useState} from 'react';
import {animated, useSpring} from 'react-spring';

const Bg: FunctionComponent<PropsWithChildren> = ({children}) => {
	const [{x, y}, set] = useSpring(() => ({
		x: 0,
		y: 0,
		config: {tension: 200, friction: 100},
	}));

	const [xMd, setXMd] = useState(0);
	const [yMd, setYMd] = useState(0);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			set({x: e.clientX - 300, y: e.clientY - 300});
		};

		window.addEventListener('mousemove', handleMouseMove);

		setXMd(window.innerWidth / 3);
		setYMd(window.innerHeight / 2);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, [set]);

	return (
		<div className="tw-w-full tw-h-full dark:tw-bg-[#1D1D1F] tw-bg-[ffffff] tw-overflow-hidden">
			<div className=" tw-blur-[200px] tw-w-full tw-h-full">
				<div className='tw-overflow-hidden tw-h-full tw-w-full'>
					<animated.div
						className="tw-bg-gradient-to-r tw-from-violet-500 tw-to-cyan-400 tw-h-[700px] dark:tw-bg-gradient-to-r dark:tw-from-violet-600 dark:tw-to-cyan-400 dark:tw-h-[600px] tw-aspect-square tw-absolute tw-z-0 tw-rounded-full tw-hidden md:tw-flex"
						style={{
							top: y.to((y) => `${y}px`),
							left: x.to((x) => `${x}px`),
							animation: 'blob-rotate 10s infinite linear',
						}}
					></animated.div>
					<animated.div
						className="tw-bg-gradient-to-r tw-from-violet-500 tw-to-cyan-400 tw-h-[700px] dark:tw-bg-gradient-to-r dark:tw-from-violet-600 dark:tw-to-cyan-400 dark:tw-h-[600px] tw-aspect-square tw-absolute tw-z-0 tw-rounded-full tw-hidden"
						style={{
							top: y.to((y) => `${yMd}px`),
							left: x.to((x) => `${xMd}px`),
							animation: 'blob-rotate 10s infinite linear',
						}}
					></animated.div>
				</div>
			</div>
			{children}
		</div>
	);
};

export default Bg;
