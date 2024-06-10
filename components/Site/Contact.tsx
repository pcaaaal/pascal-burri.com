import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import process from 'process';
import toast from 'react-hot-toast';

export default function Contact() {
	const form = useRef<HTMLFormElement>(null);

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [emailError, setEmailError] = useState('');
	const [emptyError, setEmptyError] = useState('');

	const validateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		const email = event.target.value;
		const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
		if (!emailRegex.test(email)) {
			setEmailError('Please enter a valid email address.');
		} else {
			setEmailError('');
		}
	};

	const validateEmpty = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const value = event.target.value;
		if (!value.trim()) {
			setEmptyError('This field cannot be empty.');
		} else {
			setEmptyError('');
		}
	};

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (form.current) {
			setLoading(true);

			// emailjs
			// 	.sendForm('service_vi6jk3q NIGGER', 'template_5uc28rk', form.current, {
			// 		publicKey: 'LpydiekDkIkldJ7eB',
			// 	})
			// 	.then(
			// 		() => {
			console.log('sended');
			setLoading(false);
			setSuccess(true);
			// 	},
			// 	(error) => {
			// 		console.log('FAILED...', error);
			// 	},
			// );
		}
	};

	return (
		<div className="tw-w-full tw-p-8 tw-z-20 tw-grid lg:tw-grid-cols-3 tw-gap-8">
			<div className="dark:tw-bg-[rgba(48,48,48,0.5)] tw-bg-[rgba(229,229,229,0.5)] tw-backdrop-blur-lg tw-p-4 tw-rounded-lg tw-shadow-lg lg:tw-col-span-2 tw-grid tw-grid-rows-5">
				Write me a message
			</div>

			<div className="dark:tw-bg-[rgba(48,48,48,0.5)] tw-bg-[rgba(229,229,229,0.5)] tw-backdrop-blur-lg tw-p-4 tw-rounded-lg tw-shadow-lg lg:tw-col-span-1 tw-grid tw-grid-rows-5">
				<div className="tw-row-span-1">
					<h1 className="tw-text-6xl tw-font-bold tw-text-left">
						Sag Hallo!
					</h1>
				</div>
				<div className="tw-text-left tw-w-full tw-h-full tw-row-span-4">
					<form
						className="tw-flex tw-flex-col tw-gap-2"
						onSubmit={sendEmail}
						ref={form}
					>
						<label
							htmlFor="user_name"
							className="tw-text-lg tw-font-medium"
						>
							Dein Name:
						</label>
						<input
							type="text"
							id="user_name"
							name="user_name"
							className={`tw-rounded-xl tw-py-2 tw-px-3 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-violet-600 tw-text-black ${loading || success || error ? ' tw-bg-neutral-300 dark:tw-bg-neutral-600' : ''}`}
							placeholder="Max Mustermann"
							disabled={loading || success || error}
							required={false}
							onSubmit={() => {
								validateEmpty;
							}}
						/>
						{emailError && (
							<div className="tw-text-red-500">{emailError}</div>
						)}
						{emptyError && (
							<div className="tw-text-red-500">{emptyError}</div>
						)}
						<label
							htmlFor="user_email"
							className="tw-text-lg tw-font-medium"
						>
							Deine E-Mail-Adresse:
						</label>
						<input
							type="text"
							id="user_email"
							name="user_email"
							className={`tw-rounded-xl tw-py-2 tw-px-3 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-violet-600 tw-text-black ${loading || success || error ? ' tw-bg-neutral-300 dark:tw-bg-neutral-600' : ''}`}
							placeholder="max-mustermann@mail.com"
							disabled={loading || success || error}
							required={false}
							onSubmit={() => {
								validateEmail;
								validateEmpty;
							}}
						/>
						{emptyError && (
							<div className="tw-text-red-500">{emptyError}</div>
						)}

						<label
							htmlFor="message"
							className="tw-text-lg tw-font-medium"
						>
							Deine Nachricht:
						</label>
						<textarea
							id="message"
							name="message"
							className={`tw-rounded-xl tw-py-2 tw-px-3 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-violet-600 tw-text-black ${loading || success || error ? ' tw-bg-neutral-300 dark:tw-bg-neutral-600' : ''}`}
							placeholder="Hallo Pascal, ich benötige eine Webseite für..."
							rows={4}
							disabled={loading || success || error}
							required={false}
							onSubmit={() => {
								validateEmpty;
							}}
						></textarea>
						{emptyError && (
							<div className="tw-text-red-500">{emptyError}</div>
						)}

						<div className="tw-text-left tw-w-full tw-h-full tw-row-span-1">
							<div className="tw-px-4">
								<button
									type="submit"
									className={`tw-text-center tw-text-4xl tw-font-bold ${loading ? 'dark:tw-bg-neutral-300 tw-bg-neutral-800' : error ? ' tw-bg-red-700' : success ? ' tw-bg-green-500 tw-opacity-50' : 'dark:tw-bg-neutral-100 tw-bg-neutral-900'} tw-p-2 tw-rounded-2xl tw-shadow-lg dark:tw-text-black tw-text-white tw-w-full tw-h-full tw-mt-4 tw-mb-4 tw-transition tw-duration-200 ${!(success || loading || error) ? 'hover:tw-scale-105 active:tw-scale-95' : ''}`}
									disabled={loading || success || error}
								>
									{loading
										? 'Loading...'
										: error
											? 'Error!'
											: success
												? 'Success!'
												: 'Senden'}
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
