import Image from 'next/image';
import Link from 'next/link';
import {Dispatch, FunctionComponent, SetStateAction, useState} from 'react';

import moonIcon from '../public/moon.svg';
import sunIcon from '../public/sun.svg';
import logoDarkIcon from '../public/logo-dark.svg';
import menuDarkIcon from '../public/menu-dark.svg';
import logoLightIcon from '../public/logo-light.svg';
import menuLightIcon from '../public/menu-light.svg';

interface HeaderProps {
	setDark: Dispatch<SetStateAction<boolean>>;
	dark: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({setDark, dark}) => {
	const [iconRotate, setIconRotate] = useState(false);
	const [menu, setMenu] = useState(false);

	return (
		<header className="tw-flex tw-justify-between md:tw-items-center tw-p-4 tw-w-full md:tw-h-24 tw-font-mono tw-text-black dark:tw-text-white tw-gap-3">
			<div className="tw-flex tw-justify-center tw-items-center tw-bg-[rgba(100,100,100,0.1)] tw-p-3 tw-rounded-2xl tw-aspect-square tw-h-20 md:tw-h-full">
				<Link href="/">
					<Image
						src={!dark ? logoDarkIcon : logoLightIcon}
						alt="logo"
						className="logo-icon"
					/>
				</Link>
			</div>

			<div
				className={`md:tw-flex md:tw-h-full md:tw-justify-center md:tw-items-center menu tw-align-top tw-bg-[rgba(100,100,100,0.1)] tw-gap-8 tw-grid tw-p-3 tw-rounded-2xl ${menu ? 'show' : ''} tw-text-3xl tw-w-full`}
			>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/contact">Contact</Link>
			</div>
			<div className="tw-flex tw-gap-3 tw-h-full">
				<div className="tw-flex tw-justify-center tw-items-center tw-bg-[rgba(100,100,100,0.1)] tw-p-3 tw-rounded-2xl tw-as tw-aspect-square tw-h-20 md:tw-h-full">
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
							src={!dark ? moonIcon : sunIcon}
							alt="toggle darkmode"
							className={`themeIcon ${iconRotate ? 'icon-rotate' : ''}`}
						/>
					</button>
				</div>
				<div className="tw-flex tw-justify-center tw-items-center md:tw-hidden tw-bg-[rgba(100,100,100,0.1)] tw-p-3 tw-rounded-2xl tw-aspect-square tw-h-20 md:tw-h-full">
					<button onClick={() => setMenu((val) => !val)}>
						<Image
							src={!dark ? menuDarkIcon : menuLightIcon}
							alt="menu"
							className="menu-icon"
						/>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
