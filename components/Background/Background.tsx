import {FunctionComponent, PropsWithChildren, useEffect, useState} from 'react';
import {motion, useMotionValue, useSpring} from 'framer-motion';

const Blob: FunctionComponent<PropsWithChildren> = ({children}) => {
	const cursorX = useMotionValue(-100);
	const cursorY = useMotionValue(-100);

	const springConfig = {damping: 30, stiffness: 50};
	const x = useSpring(cursorX, springConfig);
	const y = useSpring(cursorY, springConfig);

	const [angle, setAngle] = useState(0);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			cursorX.set(e.pageX - 300);
			cursorY.set(e.pageY - 300);
		};
		window.addEventListener('mousemove', handleMouseMove);

		const handleScroll = () => {
			cursorY.set(window.scrollY + 300);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('scroll', handleScroll);
		};
	}, [cursorX, cursorY]);

	return (
		<div className="tw-w-full tw-h-full dark:tw-bg-[#1D1D1F] tw-bg-[ffffff] tw-overflow-hidden">
			<div className=" tw-blur-[250px] tw-w-full tw-h-full">
				<div className="tw-overflow-hidden tw-h-full tw-w-full tw-overflow-x-hidden">
					<motion.div
						className="tw-aspect-square tw-absolute tw-z-0 tw-rounded-full tw-hidden md:tw-flex
						"
						style={{
							translateX: x,
							translateY: y,
						}}
					>
						<div className="tw-bg-gradient-to-r tw-from-[rgba(149,127,239,0.6)] tw-to-cyan-400 tw-h-[700px] dark:tw-bg-gradient-to-r dark:tw-from-[rgba(149,127,239,0.7)] dark:tw-to-[rgba(147,183,190,0.7)] dark:tw-h-[600px] tw-aspect-square tw-absolute tw-z-0 tw-rounded-full tw-hidden md:tw-flex" />
					</motion.div>
				</div>
			</div>
			{children}
		</div>
	);
};

export default Blob;
