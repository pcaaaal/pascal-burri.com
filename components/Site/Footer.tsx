const Footer = () => {
	return (
		<footer className="tw-p-6 tw-text-center tw-sm:p-12 tw-z-10 tw-relative">
			Website made by{' '}
			<a
				href="https://pascal-burri.com/"
				target="_blank"
				className="font-semibold hover:text-white"
				rel="noreferrer"
			>
				Pascal Burri
			</a>
			, made with NextJS, and Tailwind © {new Date().getFullYear()} All
			rights reserved. Illustrations by{' '}
			<a href="https://www.freepik.com/" rel="noreferrer" target="_blank">freepik</a>.
		</footer>
	);
};

export default Footer;
