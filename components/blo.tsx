import {FunctionComponent, PropsWithChildren, useEffect} from 'react';
import {animated, useSpring} from 'react-spring';

const Blob: FunctionComponent<PropsWithChildren> = ({children}) => {
	const [{x, y}, set] = useSpring(() => ({
		x: 0,
		y: 0,
		config: {tension: 200, friction: 100},
	}));

	const [{xMd, yMd}, setMd] = useSpring(() => ({
		xMd: 0,
		yMd: 0,
		config: {tension: 200, friction: 100},
	}));

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			set({x: e.pageX - 300, y: e.pageY - 300});
			setMd({xMd: e.pageX - 300, yMd: e.pageY - 300});
		};

		window.addEventListener('mousemove', handleMouseMove);

		const handleScroll = () => {
			set({y: window.scrollY + 300});
			setMd({yMd: window.scrollY + 300});
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('scroll', handleScroll);
		};
	}, [set, setMd]);

	return (
		<div className="tw-w-full tw-h-full dark:tw-bg-[#1D1D1F] tw-bg-[ffffff] tw-overflow-hidden">
			<div className=" tw-blur-[250px] tw-w-full tw-h-full">
				<div className="tw-overflow-hidden tw-h-full tw-w-full tw-overflow-x-hidden">
					<animated.div
						className="tw-bg-gradient-to-r tw-from-[rgba(149,127,239,0.6)] tw-to-cyan-400 tw-h-[700px] dark:tw-bg-gradient-to-r dark:tw-from-[rgba(149,127,239,0.7)] dark:tw-to-[rgba(147,183,190,0.7)] dark:tw-h-[600px] tw-aspect-square tw-absolute tw-z-0 tw-rounded-full tw-hidden md:tw-flex"
						style={{
							top: y.to((y) => `${y}px`),
							left: x.to((x) => `${x}px`),
							animation: 'blob-rotate 10s infinite linear',
						}}
					></animated.div>
					<animated.div
						className="tw-bg-gradient-to-r tw-from-violet-500 tw-to-cyan-400 tw-h-[700px] dark:tw-bg-gradient-to-r dark:tw-from-violet-600 dark:tw-to-cyan-400 dark:tw-h-[600px] tw-aspect-square tw-absolute tw-z-0 tw-rounded-full md:tw-hidden"
						style={{
							top: y.to((yMd) => `${yMd}px`),
							left: x.to((xMd) => `${xMd}px`),
							animation: 'blob-rotate 10s infinite linear',
						}}
					></animated.div>
				</div>
			</div>
			{children}
		</div>
	);
};

export default Blob;
