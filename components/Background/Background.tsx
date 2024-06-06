import {FunctionComponent, PropsWithChildren, useEffect} from 'react';
import {animated, useSpring} from 'react-spring';

const Background: FunctionComponent<PropsWithChildren> = ({children}) => {
	const [{x, y}, set] = useSpring(() => ({
		x: 0,
		y: 0,
		config: {tension: 200, friction: 100},
	}));

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			set({x: e.pageX - 150, y: e.pageY - 150});
		};

		window.addEventListener('mousemove', handleMouseMove);

		const handleScroll = () => {
			set({y: window.scrollY + 150});
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('scroll', handleScroll);
		};
	}, [set]);

	return (
		<div className="tw-w-full tw-h-full dark:tw-bg-[#1D1D1F] tw-bg-[#f2f2f2] tw-overflow-hidden tw-overflow-x-hidden tw-overflow-y-hidden background">
			<animated.div
				className="blob tw-h-[300px] tw-aspect-square tw-absolute tw-z-0 tw-rounded-full tw-flex md:tw-flex tw-blur-3xl"
				style={{
					top: y.to((y) => `${y}px`),
					left: x.to((x) => `${x}px`),
				}}
			></animated.div>
			{children}
		</div>
	);
};

export default Background;
