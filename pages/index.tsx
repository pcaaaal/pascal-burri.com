import {FunctionComponent} from 'react';
import Home from '../components/Home';
import Footer from '../components/Footer';
import type {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Pascal Burri - Portfolio Website 龴ↀ◡ↀ龴',
	description:
		'Hello, I am Pascal, a developer from Switzerland. This is my portfoliowebsite. This website is built with Next.js and TailwindCSS.',
};

const Site: FunctionComponent = () => {
	return (
		<div className="tw-z-30 tw-relative">
			<Home />
			<div className="tw-h-[100vh] tw-grid tw-text-center" id="about">
				<h1>ABOUT</h1>
			</div>
			<div className="tw-h-[100vh] tw-grid tw-text-center" id="projects">
				<h1>PROJECTS</h1>
			</div>
			<div className="tw-h-[100vh] tw-grid tw-text-center" id="contact">
				<h1>CONTACT</h1>
			</div>
			<Footer />
		</div>
	);
};

export default Site;
