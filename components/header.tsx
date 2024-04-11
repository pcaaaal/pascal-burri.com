import Image from 'next/image';
import Link from 'next/link';
import {
	Dispatch,
	FunctionComponent,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react';

import darkIcon from '../public/dark.svg';
import lightIcon from '../public/light.svg';
import logoDarkIcon from '../public/logo-dark.svg';
import logoLightIcon from '../public/logo-light.svg';
import menuDarkIcon from '../public/menu-dark.svg';
import menuLightIcon from '../public/menu-light.svg';

interface HeaderProps {
	setDark: Dispatch<SetStateAction<boolean>>;
	dark: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({setDark, dark}) => {
	const [iconRotate, setIconRotate] = useState(false);
	const [menu, setMenu] = useState(false);
	const [icon, setIcon] = useState(true);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				if (menu) {
					setMenu(false);
					setTimeout(() => {
					setIcon(true);
					}, 300);
				}
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [menuRef, menu]);

	return (
		<header className="tw-flex tw-justify-between md:tw-items-center tw-p-4 tw-w-full md:tw-h-24 tw-font-mono tw-text-black dark:tw-text-white tw-gap-3 tw-relative">
			<div
				className={`tw-flex tw-justify-center tw-items-center tw-bg-[rgba(100,100,100,0.1)] tw-p-3 tw-rounded-2xl tw-aspect-square tw-h-20 md:tw-h-full ${icon ? '' : 'hide-icon'} header-icon`}
			>
				<Link href="/">
					<Image
						src={!dark ? logoDarkIcon : logoLightIcon}
						alt="logo"
						className="logo-icon"
					/>
				</Link>
			</div>

			<div
				ref={menuRef}
				className={`md:tw-flex md:tw-h-full md:tw-justify-center md:tw-items-center tw-align-top tw-bg-[rgba(100,100,100,0.1)] tw-gap-8 tw-grid tw-p-3 tw-rounded-2xl ${menu ? 'show-menu' : ''} menu tw-text-3xl tw-w-full`}
			>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/contact">Contact</Link>
			</div>
			<div
				className={`tw-flex tw-gap-3 tw-h-full ${icon ? '' : 'hide-icon'} header-icon`}
			>
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
							src={!dark ? darkIcon : lightIcon}
							alt="toggle darkmode"
							className={`themeIcon ${iconRotate ? 'icon-rotate' : ''}`}
						/>
					</button>
				</div>
				<div className="tw-flex tw-justify-center tw-items-center md:tw-hidden tw-bg-[rgba(100,100,100,0.1)] tw-p-3 tw-rounded-2xl tw-aspect-square tw-h-20 md:tw-h-full">
					<button
						onClick={() => {
							setIcon(false);
							setTimeout(() => {
								setMenu(true);
							}, 300);
						}}
					>
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
