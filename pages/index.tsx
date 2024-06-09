import {FunctionComponent} from 'react';
import Home from '../components/Site/Home';
import Footer from '../components/Site/Footer';
import type {Metadata} from 'next';
import About from '../components/Site/About';
import Projects from '../components/Site/Projects';
import Contact from '../components/Site/Contact';

export const metadata: Metadata = {
	title: 'Pascal Burri - Portfolio Website 龴ↀ◡ↀ龴',
	description:
		'Hello, I am Pascal, a developer from Switzerland. This is my portfoliowebsite. This website is built with Next.js and TailwindCSS.',
};

const Site: FunctionComponent = () => {
	return (
		<div className="tw-relative">
			<Home />
			<div className="" id="about">
				<About />
			</div>
			<div className="" id="projects">
				<Projects />
			</div>
			<div className="" id="contact">
				<Contact />
			</div>
			<Footer />
		</div>
	);
};

export default Site;
