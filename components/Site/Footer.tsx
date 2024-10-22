const Footer = () => {
	return (
		<div className="tw-p-6 tw-sm:p-12 tw-flex tw-w-full tw-justify-center tw-items-center">
			<div className="tw-z-20 tw-block">
				<span className="tw-text-center">
					Website made by{' '}
					<a
						href="https://pascal-burri.com/"
						target="_blank"
						className="font-semibold hover:tw-underline"
						rel="noreferrer"
					>
						Pascal Burri
					</a>
					, made with NextJS, and Tailwind ©{' '}
					{new Date().getFullYear()} All rights reserved.
					Illustrations by{' '}
					<a
						href="https://www.freepik.com/"
						rel="noreferrer"
						target="_blank"
						className="hover:tw-underline"
					>
						freepik
					</a>
					.
				</span>
			</div>
		</div>
	);
};

export default Footer;
