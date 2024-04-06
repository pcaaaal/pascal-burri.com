import Link from 'next/link';
import {FunctionComponent} from 'react';

const Header: FunctionComponent = () => {
	return (
		<header className="tw-flex tw-h-20 tw-items-center tw-w-full tw-justify-between tw-p-3">
			<div>
				<p>logo here</p>
			</div>

			<div className="tw-bg-black tw-gap-8 tw-flex tw-self-center">
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/contact">Contact</Link>
			</div>

			<div>
				<p>Dark Mode Here</p>
			</div>
		</header>
	);
};

export default Header;
