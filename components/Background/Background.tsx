import {
	FunctionComponent,
	PropsWithChildren,
	use,
	useEffect,
	useState,
} from 'react';
import {animated, useSpring} from 'react-spring';

const Background: FunctionComponent<PropsWithChildren> = ({children}) => {
	const [lastY, setLastY] = useState(0);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [{x, y}, set] = useSpring(() => ({
		x: 0,
		y: 0,
		config: {tension: 200, friction: 100},
	}));

	useEffect(() => {
		const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);

		if (!isMobile) {
			const handleMouseMove = (e: MouseEvent) => {
				setLastY(e.pageY);
				set({x: e.pageX - 150, y: e.pageY - 150});
			};

			const handleScroll = () => {
				const currentScrollY = window.scrollY;
				setLastScrollY(currentScrollY);
				set({y: lastY + (currentScrollY - lastScrollY)});
			};

			window.addEventListener('mousemove', handleMouseMove);
			window.addEventListener('scroll', handleScroll);

			return () => {
				window.removeEventListener('mousemove', handleMouseMove);
				window.removeEventListener('scroll', handleScroll);
			};
		}
	}, [lastScrollY, lastY, set]);

	useEffect(() => {
		const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);

		if (isMobile) {
			const handleTouchScroll = () => {
				set({y: window.scrollY});
			};

			window.addEventListener('scroll', handleTouchScroll);

			return () => {
				window.removeEventListener('scroll', handleTouchScroll);
			};
		}
	}, [set]);

	return (
		<div className="tw-w-full tw-h-full dark:tw-bg-[#1D1D1F] tw-bg-[#f2f2f2] tw-overflow-hidden tw-overflow-x-hidden tw-overflow-y-hidden background">
			<animated.div
				className="tw-hidden blob tw-h-[300px] tw-aspect-square tw-absolute tw-z-0 tw-rounded-full md:tw-flex tw-blur-3xl"
				style={{
					top: y.to((y) => `${y}px`),
					left: x.to((x) => `${x}px`),
				}}
			></animated.div>
			<animated.div
				className="blob tw-flex tw-absolute tw-h-[300px] tw-aspect-square tw-z-0 tw-rounded-full md:tw-hidden tw-blur-3xl"
				style={{
					top: y.to((MdY) => `${y}px`),
					left:
						typeof window !== 'undefined'
							? window.innerWidth / 2 - 150
							: 0,
				}}
			></animated.div>
			{children}
		</div>
	);
};

export default Background;
