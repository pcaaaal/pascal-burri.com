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

import menuDarkIcon from '/public/icons/menu-dark.svg';
import menuLightIcon from '/public/icons/menu-light.svg';
import moonIcon from '/public/icons/moon.svg';
import sunIcon from '/public/icons/sun.svg';
import {animated} from 'react-spring';
import {link} from 'fs';

interface HeaderProps {
	setDark: Dispatch<SetStateAction<boolean>>;
	dark: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({setDark, dark}) => {
	const [iconRotate, setIconRotate] = useState(false);
	const [menu, setMenu] = useState(false);
	const [icon, setIcon] = useState(true);
	const menuRef = useRef<HTMLDivElement>(null);
	const [menuIsHidden, setMenuIsHidden] = useState(true);
	const [iconIsHidden, setIconIsHidden] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const [showScroll, setShowScroll] = useState(false);

	const scrollTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	};

	useEffect(() => {
		const checkScrollTop = () => {
			if (!showScroll && window.scrollY > 400) {
				setShowScroll(true);
			} else if (showScroll && window.scrollY <= 400) {
				setShowScroll(false);
			}
		};

		// Check if window is defined (so if we're on the server-side rendering, it won't run)
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', checkScrollTop);
		}

		// Cleanup function to remove the event listener when the component unmounts
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('scroll', checkScrollTop);
			}
		};
	}, [showScroll]);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				if (menu) {
					setShowMenu(false);
				}
			}
		}

		if (showMenu) {
			setIcon(false);
			setTimeout(() => {
				setIconIsHidden(true);
				setMenuIsHidden(false);
				setMenu(true);
			}, 300);
		} else {
			setMenu(false);
			setTimeout(() => {
				setMenuIsHidden(true);
				setIconIsHidden(false);
				setIcon(true);
			}, 300);
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [menuRef, menu, showMenu]);

	useEffect(() => {
		function glitchEffect() {
			const letters = 'abcdefghijklmnopqrstuvwxyz';
			const words = document.querySelectorAll('.glitch-word');

			words.forEach((word: Element) => {
				const originalText = word.textContent;

				word.addEventListener('mouseenter', function () {
					let itterations = 0;

					let interval = setInterval(() => {
						word.textContent = (originalText ?? '')
							.split('')
							.map((char, i) => {
								if (2 * i < itterations) {
									return originalText?.charAt(i) ?? '';
								}

								return letters[
									Math.floor(Math.random() * letters.length)
								];
							})
							.join('');

						if (itterations > 2 * (originalText?.length ?? 0)) {
							clearInterval(interval);
							word.textContent = originalText;
						}
						itterations++;
					}, 50);
				});
			});
		}
		glitchEffect();
	}, []);

	// function useScrollDirection() {
	// 	const [scrollDirection, setScrollDirection] = useState<
	// 		'down' | 'up' | null
	// 	>(null);
	// 	useEffect(() => {
	// 		let lastScrollY = window.scrollY;

	// 		const updateScrollDirection = () => {
	// 			const scrollY = window.scrollY;
	// 			const direction = scrollY > lastScrollY ? 'down' : 'up';
	// 			if (
	// 				direction !== scrollDirection &&
	// 				(scrollY - lastScrollY > 3 || scrollY - lastScrollY < -3)
	// 			) {
	// 				setScrollDirection(direction);
	// 			}
	// 			lastScrollY = scrollY > 0 ? scrollY : 0;
	// 		};
	// 		window.addEventListener('scroll', updateScrollDirection);
	// 		return () => {
	// 			window.removeEventListener('scroll', updateScrollDirection);
	// 		};
	// 	}, [scrollDirection]);
	// 	return scrollDirection;
	// }

	const menuItems = [
		{name: 'Home', link: 'home'},
		{name: 'Über', link: 'about'},
		{name: 'Projekte', link: 'projects'},
		{name: 'Kontakt', link: 'contact'},
	];

	return (
		<div>
			<header
				className={`tw-flex tw-items-center tw-p-4 tw-w-full md:tw-h-20 tw-font-mono tw-gap-3 tw-fixed tw-z-50 header-show`}
			>
				<div className="md:tw-flex tw-aspect-square tw-h-12 tw-hidden tw-pointer-events-none"></div>
				<div
					ref={menuRef}
					className={`tw-backdrop-blur-xl md:tw-flex md:tw-h-full md:tw-justify-center md:tw-items-center tw-align-top tw-bg-[rgba(100,100,100,0.1)] dark:tw-bg-[rgba(150,150,150,0.1)] tw-grid tw-px-0 tw-py-1 tw-rounded-[20px] ${menu ? 'show-menu' : ''} ${menuIsHidden ? 'tw-hidden' : ''} menu text-medium tw-w-full md:tw-w-auto md:tw-mr-auto md:tw-ml-auto`}
				>
					{menuItems.map((item, index) => (
						<Link
							key={item.link}
							href={`/#${item.link}`}
							onClick={menu ? () => setShowMenu(false) : () => {}}
							className={`tw-rounded-[20px] tw-py-2 tw-px-3 md:hover:tw-bg-[rgba(50,50,50,0.1)] dark:md:hover:tw-bg-[rgba(200,200,200,0.1)] icon-click`}
						>
							<p className={`glitch-word md:tw-text-2xl`}>
								{item.name.split('').map((char, i) => (
									<span key={i}>{char}</span>
								))}
							</p>
						</Link>
					))}
				</div>
				<div
					className={`tw-flex tw-gap-3 tw-h-full ${icon ? '' : 'hide-icon'} ${iconIsHidden ? 'tw-hidden' : ''} header-icon tw-justify-between tw-w-full md:tw-w-auto`}
				>
					<div className="tw-backdrop-blur-xl tw-flex tw-justify-center tw-itemsF-center md:tw-hidden tw-bg-[rgba(100,100,100,0.1)] dark:tw-bg-[rgba(150,150,150,0.1)] tw-p-3 tw-rounded-full tw-aspect-square tw-h-12 md:tw-h-full md:hover:tw-bg-[rgba(50,50,50,0.1)] dark:md:hover:tw-bg-[rgba(200,200,200,0.1)] icon-click">
						<button
							className=""
							onClick={() => {
								setShowMenu(true);
							}}
						>
							<Image
								src={!dark ? menuDarkIcon : menuLightIcon}
								alt="menu"
								className="menu-icon"
								style={{
									maxWidth: '100%',
									height: 'auto',
								}}
							/>
						</button>
					</div>
					<div className="tw-backdrop-blur-xl tw-flex tw-justify-center tw-items-center tw-bg-[rgba(100,100,100,0.1)] dark:tw-bg-[rgba(150,150,150,0.1)] tw-rounded-full tw-as tw-aspect-square tw-h-12 md:tw-h-full md:hover:tw-bg-[rgba(50,50,50,0.1)] dark:md:hover:tw-bg-[rgba(200,200,200,0.1)] icon-click">
						<button
							className="tw-p-2"
							onClick={() => {
								setIconRotate(true);
								setTimeout(() => {
									setDark((val) => !val);
									window.localStorage.setItem(
										'theme',
										!dark ? 'dark' : 'light',
									);
									setIconRotate(false);
								}, 500);
							}}
						>
							<Image
								src={!dark ? moonIcon : sunIcon}
								alt="toggle darkmode"
								className={`themeIcon ${iconRotate ? 'icon-rotate' : ''}`}
								style={{
									maxWidth: '100%',
									height: 'auto',
								}}
							/>
						</button>
					</div>
				</div>
			</header>

			<animated.div
				className="tw-fixed tw-bottom-2 tw-right-2 tw-p-2 tw-z-50 tw-block"
				style={
					showScroll
						? {
								opacity: 1,
								transition: 'opacity 0.5s',
							}
						: {
								opacity: 0,
								transition: 'opacity 0.5s',
							}
				}
				onClick={scrollTop}
			>
				<div className="tw-p-2 tw-rounded-full tw-backdrop-blur-xl tw-bg-[rgba(100,100,100,0.1)] dark:tw-bg-[rgba(150,150,150,0.1)] hover:tw-bg-[rgba(50,50,50,0.1)] dark:hover:tw-bg-[hsla(0,0%,78%,0)]  hover:tw-cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="tw-h-8 tw-w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 10l7-7m0 0l7 7m-7-7v18"
						/>
					</svg>
				</div>
			</animated.div>
		</div>
	);
};

export default Header;
