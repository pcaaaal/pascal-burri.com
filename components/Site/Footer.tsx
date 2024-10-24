import Link from 'next/link';

const Footer = () => {
	return (
		<div className="tw-p-6 tw-sm:p-12 tw-flex tw-w-full tw-justify-center tw-text-center tw-items-center">
			<div className="tw-z-20 tw-block">
				<span className="tw-text-center">
					Website made by{' '}
					<Link
						href="https://pascal-burri.com/"
						target="_blank"
						className="font-semibold hover:tw-underline"
						rel="noreferrer"
					>
						Pascal Burri
					</Link>
					, made with NextJS, and Tailwind ©{' '}
					{new Date().getFullYear()} All rights reserved.
					Illustrations by{' '}
					<Link
						href="https://www.freepik.com/"
						rel="noreferrer"
						target="_blank"
						className="hover:tw-underline"
					>
						freepik
					</Link>
					.
					<br />
					<Link href="/privacypolicy" className="hover:tw-underline">
						Datenschutzerklärung
					</Link>{' '}
					<Link href="/legalnotice" className="hover:tw-underline">
						Impressum
					</Link>{' '}
					<Link href="/disclaimer" className="hover:tw-underline">
						Disclaimer
					</Link>
				</span>
			</div>
		</div>
	);
};

export default Footer;
