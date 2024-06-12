import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function Contact() {
	const form = useRef<HTMLFormElement>(null);

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [formError, setFormError] = useState(false);
	const [emailTriesError, setEmailTriesError] = useState(false);
	const [success, setSuccess] = useState(false);

	const [nameError, setNameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [messageError, setMessageError] = useState('');

	const [errorMessage, setMessage] = useState('');

	const emailTries = 6;

	const [emailRegexError, setEmailRegexError] = useState(false);

	const emptyErrorMessage = 'Feld darf nicht leer sein.';
	const emailErrorMessage = 'E-Mail Addresse ist nicht gültig.';

	const validateEmail = (email: string) => {
		const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
		if (!emailRegex.test(email)) {
			return false;
		} else {
			return true;
		}
	};

	const validateEmpty = (value: string) => {
		if (!value.trim()) {
			return false;
		} else {
			return true;
		}
	};

	const handleValidation = () => {
		const name = (form.current?.user_name.value || '').trim();
		const email = (form.current?.user_email.value || '').trim();
		const message = (form.current?.message.value || '').trim();

		const isNameNotEmpty = validateEmpty(name);
		const isEmailValid = validateEmail(email);
		const isEmailNotEmpty = validateEmpty(email);
		const isMessageNotEmpty = validateEmpty(message);

		setNameError(isNameNotEmpty ? '' : emptyErrorMessage);
		setEmailError(
			isEmailNotEmpty
				? isEmailValid
					? ''
					: emailErrorMessage
				: emptyErrorMessage,
		);

		setEmailRegexError(!isEmailValid);

		setMessageError(isMessageNotEmpty ? '' : emptyErrorMessage);

		return isNameNotEmpty && isEmailValid && isMessageNotEmpty;
	};

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (handleValidation()) {
			setLoading(true);
			setError(false);
			setSuccess(false);
			setFormError(false);
			setEmailTriesError(false);

			if (emailTries < 10) {
				if (form.current) {
					emailjs
						.sendForm(
							'service_vi6jk3q NIGG',
							'template_5uc28rk',
							form.current,
							'LpydiekDkIkldJ7eB',
						)
						.then(
							() => {
								console.log('sended');
								setLoading(false);
								setSuccess(true);
								setMessage(
									'Vielen Dank für deine Nachricht. Ich melde mich so schnell wie möglich!',
								);
							},
							(error) => {
								console.log('FAILED...', error);
								setLoading(false);
								setEmailTriesError(true);
								setMessage(
									'Etwas ist schief gelaufen. Bitte versuche es später erneut oder kontaktiere mich über meine E-Mail Addresse.',
								);
							},
						);
				}
			} else {
				setSuccess(false);
				setFormError(false);
				setLoading(false);
				setError(true);
				setMessage(
					'Du hast zu viele E-Mails gesendet. Bitte versuche es später erneut.',
				);
			}
		} else {
			setLoading(false);
			setFormError(true);
			setMessage(
				emailRegexError
					? 'E-Mail Addresse ist nicht gültig.'
					: 'Bitte fülle alle Felder aus.',
			);
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
							placeholder={
								nameError ? nameError : 'Max Mustermann'
							}
							disabled={loading || success || error}
						/>

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
							placeholder={
								emailError
									? emailError
									: 'max-mustermann@mail.com'
							}
							disabled={loading || success || error}
						/>

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
							placeholder={
								messageError
									? messageError
									: 'Hallo Pascal, ich benötige eine Website für...'
							}
							rows={4}
							disabled={loading || success || error}
						></textarea>

						<div className="tw-text-left tw-w-full tw-h-full tw-row-span-1">
							<div className="tw-px-4 tw-flex tw-flex-col tw-text-center">
								<button
									type="submit"
									className={`tw-text-center tw-text-4xl tw-font-bold ${loading ? 'dark:tw-bg-neutral-300 tw-bg-neutral-800' : error ? ' tw-bg-red-700' : emailTriesError ? 'tw-bg-red-700' : success ? ' tw-bg-green-500 tw-opacity-50' : formError ? 'tw-bg-orange-600 tw-opacity-75' : 'dark:tw-bg-neutral-100 tw-bg-neutral-900'} tw-p-2 tw-rounded-2xl tw-shadow-lg dark:tw-text-black tw-text-white tw-w-full tw-h-full tw-mt-4 tw-mb-4 tw-transition tw-duration-200 ${!(success || loading || error) ? 'hover:tw-scale-105 active:tw-scale-95' : ''}`}
									disabled={
										loading || success || emailTriesError
									}
								>
									{loading
										? 'Loading...'
										: error
											? 'Error!'
											: success
												? 'Success!'
												: 'Senden'}
								</button>
								<span>
									{formError || error ? errorMessage : ''}
								</span>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
