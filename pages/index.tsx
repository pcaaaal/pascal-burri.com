import {FunctionComponent} from 'react';
import Home from '../components/Site/Home';
import Footer from '../components/Site/Footer';
import type {Metadata} from 'next';
import About from '../components/Site/About';
import Projects from '../components/Site/Projects';
import Contact from '../components/Site/Contact';
import Head from 'next/head';

export const metadata = {
	title: 'Pascal Burri - Portfolio Website',
	description:
		'Hello, I am Pascal, a developer from Switzerland. This is my portfoliowebsite. This website is built with Next.js and TailwindCSS.',
};

type darkProps = {
	dark: boolean;
};

const Site: FunctionComponent<darkProps> = ({dark}) => {
	return (
		<div>
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<Home />
			<div className="" id="about">
				<div className="blob tw-flex tw-absolute tw-h-[340px] tw-aspect-square tw-z-0 tw-rounded-full tw-blur-3xl tw-right-3"></div>
				<About />
			</div>
			<div className="" id="projects">
				<div className="blob tw-flex tw-absolute tw-h-[200px] tw-aspect-square tw-z-0 tw-rounded-full tw-blur-3xl tw-left-1"></div>
				<Projects />
			</div>
			<div className="" id="contact">
				<div className="blob tw-flex tw-absolute tw-h-[300px] tw-aspect-square tw-z-0 tw-rounded-full tw-blur-3xl tw-right-9"></div>
				<Contact dark={dark} />
			</div>
		</div>
	);
};

export default Site;
