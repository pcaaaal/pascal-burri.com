import {FunctionComponent, PropsWithChildren, useEffect} from 'react';
import {animated, useSpring} from 'react-spring';

const Blob: FunctionComponent<PropsWithChildren> = ({children}) => {
	const [{x, y}, set] = useSpring(() => ({
		x: 0,
		y: 0,
		config: {tension: 200, friction: 100},
	}));

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			set({x: e.clientX - 300, y: e.clientY - 300});
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div className="tw-w-full tw-h-full dark:tw-bg-[#1D1D1F] tw-bg-[f8f9fa] tw-overflow-hidden">
			<div className="tw-blur-[150px]">
				<animated.div
					className="tw-bg-gradient-to-r tw-from-violet-500 tw-to-blue-600 dark:tw-bg-gradient-to-r dark:tw-from-violet-600 dark:tw-to-cyan-400 tw-h-[400px] tw-w-[400px] tw-absolute tw-z-0 tw-rounded-full"
					style={{
						top: y.to((y) => `${y}px`),
						left: x.to((x) => `${x}px`),
						animation: 'rotate 10s infinite linear',
					}}
				></animated.div>
			</div>
			{children}
		</div>
	);
};

export default Blob;
