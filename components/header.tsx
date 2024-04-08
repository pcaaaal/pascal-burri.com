import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, FunctionComponent, SetStateAction, useState } from 'react';

import darkIcon from '../public/dark.svg';
import lightIcon from '../public/light.svg';
import menuIcon from '../public/menu.svg';
import logo from '../public/logo.svg';

interface HeaderProps {
	setDark: Dispatch<SetStateAction<boolean>>;
	dark: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({ setDark, dark }) => {
	const [iconRotate, setIconRotate] = useState(false);
	const [menu, setMenu] = useState(false);

	return (
		<header className="dark:tw-text-white tw-font-mono tw-flex md:tw-h-20 md:tw-items-center tw-justify-between tw-px-8 tw-py-3 tw-text-black tw-w-full">
			<div className="tw-bg-[rgba(100,100,100,0.1)] tw-flex tw-items-center tw-justify-center tw-p-3  md:tw-h-full tw-rounded-2xl">
				<Link href="/">
					<Image src={logo} alt="logo" className="logo-icon tw-h-full tw-w-full" />
				</Link>
			</div>

			<div className={`hide md:tw-flex md:tw-h-full md:tw-justify-center md:tw-items-center menu tw-align-top tw-bg-[rgba(100,100,100,0.1)] tw-gap-8 tw-grid tw-p-3 tw-rounded-2xl ${menu ? 'show' : ''}`}>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/contact">Contact</Link>
			</div>
			<div className="tw-flex tw-gap-3 tw-h-16">
				<div className="tw-bg-[rgba(100,100,100,0.1)] tw-flex tw-h-full tw-items-center tw-justify-center tw-p-3 tw-rounded-2xl tw-w-16">
					<button
						onClick={() => {
							setIconRotate(true);
							setTimeout(() => {
								setDark((val) => !val);
								setIconRotate(false);
							}, 500);
						}}
					>
						<Image
							src={!dark ? darkIcon : lightIcon}
							alt="toggle darkmode"
							className={`icon-rotate themeIcon ${iconRotate ? '' : ''}`}
						/>
					</button>
				</div>
				<div className="tw-bg-[rgba(100,100,100,0.1)] tw-flex tw-h-full tw-items-center tw-justify-center tw-md-hidden tw-p-3 tw-rounded-2xl tw-w-16">
					<button onClick={() => setMenu((val) => !val)}>
						<Image src={menuIcon} alt="menu" className="menu-icon" />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
