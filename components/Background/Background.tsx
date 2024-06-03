import {FunctionComponent, PropsWithChildren, useEffect, useState} from 'react';
import {motion, useMotionValue, useSpring} from 'framer-motion';
import Blob from './Blob';
import Grain from './Grain';

const Background: FunctionComponent<PropsWithChildren> = ({children}) => {
	const cursorX = useMotionValue(-100);
	const cursorY = useMotionValue(-100);

	const springConfig = {damping: 30, stiffness: 50};
	const x = useSpring(cursorX, springConfig);
	const y = useSpring(cursorY, springConfig);

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
			<div className="tw-absolute tw-inset-0 tw-opacity-15">
				<Grain />
			</div>
			<div className=" tw-blur-[250px] tw-w-full tw-h-full">
				<div className="tw-overflow-hidden tw-h-full tw-w-full tw-overflow-x-hidden">
					<motion.div
						className="tw-absolute tw-z-0 tw-flex
						"
						style={{
							translateX: x,
							translateY: y,
						}}
					>
						<Blob />
					</motion.div>
				</div>
			</div>
			{children}
		</div>
	);
};

export default Background;
