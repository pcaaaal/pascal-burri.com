const Footer = () => {
	return (
		<footer className="tw-p-6 tw-text-center tw-text-white/80 tw-sm:p-12 ">
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
			rights reserved.{' '}
		</footer>
	);
};

export default Footer;
