import React, {useEffect} from 'react';

export default function Modal() {
	const [showModal, setShowModal] = React.useState(true);

	useEffect(() => {
		if (showModal) {
			document.documentElement.classList.add('tw-overflow-hidden');
			document.body.classList.add('tw-overflow-y-hidden');
		} else {
			document.documentElement.classList.remove('tw-overflow-hidden');
			document.body.classList.remove('tw-overflow-y-hidden');
		}

		return () => {
			document.documentElement.classList.remove('tw-overflow-hidden');
			document.body.classList.remove('tw-overflow-y-hidden');
		};
	}, [showModal]);

	return (
		<>
			{showModal ? (
				<>
					<div className="tw-justify-center tw-items-center tw-flex tw-overflow-x-hidden tw-overflow-y-auto tw-fixed tw-inset-0 tw-z-50 tw-outline-none tw-focus:outline-none tw-backdrop-blur-lg tw-p-4">
						<div className="tw-relative tw-w-auto tw-my-6 tw-mx-auto tw-max-w-3xl">
							{/*content*/}
							<div className="tw-rounded-[25px] tw-relative tw-flex tw-flex-col tw-w-full dark:tw-bg-gradient-to-br dark:tw-from-[rgba(255,255,255,0.2)] dark:tw-to-[rgba(50,50,50,0.1)] tw-border-[rgba(255,255,255,0.2)] tw-border-2 tw-outline-none tw-focus:outline-none modal-shadow">
								{/*header*/}
								<div className="tw-flex tw-items-start tw-justify-between tw-px-5 tw-pt-5 tw-pb-2 tw-rounded-t">
									<h3 className="tw-text-3xl tw-font-semibold">
										{`Cookies!`}
									</h3>
									<button
										className="tw-p-1 tw-ml-auto tw-bg-transparent tw-border-0 tw-text-black tw-opacity-5 tw-float-right tw-text-3xl tw-leading-none tw-font-semibold tw-outline-none tw-focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="tw-bg-transparent tw-text-black tw-opacity-5 tw-h-6 tw-w-6 tw-text-2xl tw-block tw-outline-none tw-focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className="tw-relative tw-px-5 tw-pt-2 tw-pb-2 tw-flex-auto">
									<p className="tw-my-4 tw-text-blueGray-500 tw-text-lg tw-leading-relaxed">
										{`This website uses cookies to save your preferences and provide a better browsing experience. By using this website, you agree to our Cookie Policy.`}
									</p>
								</div>
								{/*footer*/}
								<div className="tw-flex tw-items-center tw-justify-end tw-px-5 tw-pt-2 tw-pb-5 tw-rounded-b">
									<button
										className="tw-bg-white tw-text-black tw-active:bg-emerald-600 tw-font-bold tw-uppercase tw-text-sm tw-px-6 tw-py-3 tw-rounded tw-shadow tw-hover:shadow-lg tw-outline-none tw-focus:outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Accept Cookies
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="tw-opacity-25 tw-fixed tw-inset-0 tw-z-40 tw-bg-black"></div>
				</>
			) : null}
		</>
	);
}
