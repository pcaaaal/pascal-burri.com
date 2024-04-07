import Link from 'next/link';
import {Dispatch, FunctionComponent, SetStateAction} from 'react';

interface HeaderProps {
	setDark: Dispatch<SetStateAction<boolean>>;
}

const Header: FunctionComponent<HeaderProps> = ({setDark}) => {
	return (
		<header className="tw-flex tw-h-20 tw-items-center tw-w-full tw-justify-between tw-p-3">
			<div>
				<p>logo here</p>
			</div>

			<div className="">
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/contact">Contact</Link>
			</div>

			<div>
				<button onClick={() => setDark((val) => !val)}>Dark mode</button>
			</div>
		</header>
	);
};

export default Header;
