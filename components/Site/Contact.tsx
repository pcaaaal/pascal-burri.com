import React, {useRef, useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function Contact() {
	const form = useRef<HTMLFormElement>(null);

	const [loading, setLoading] = useState(false);
	const [formState, setFormState] = useState<
		'loading' | 'success' | 'error' | 'formError' | 'userFault' | ''
	>('');
	const [errors, setErrors] = useState({
		name: '',
		email: '',
		emailRegex: '',
		message: '',
	});
	const [buttonState, setButtonState] = useState(
		'dark:tw-bg-neutral-100 tw-bg-neutral-900',
	);
	const [buttonText, setButtonText] = useState('Senden');
	const [message, setMessage] = useState(
		'Alle deine Daten sind nur für mich um dich zu kontaktieren.',
	);

	let emailTries = 3;

	const emptyErrorMessage = 'Feld darf nicht leer sein.';
	const emailErrorMessage = 'E-Mail Addresse ist nicht gültig.';

	const validateEmail = (email: string) => {
		const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
		return emailRegex.test(email);
	};

	const validateEmpty = (value: string) => value.trim() !== '';

	const handleValidation = () => {
		const name = (form.current?.user_name.value || '').trim();
		const email = (form.current?.user_email.value || '').trim();
		const message = (form.current?.message.value || '').trim();

		const isNameNotEmpty = validateEmpty(name);
		const isEmailValid = validateEmail(email);
		const isEmailNotEmpty = validateEmpty(email);
		const isMessageNotEmpty = validateEmpty(message);

		setErrors({
			name: isNameNotEmpty ? '' : emptyErrorMessage,
			email: isEmailNotEmpty ? '' : emptyErrorMessage,
			emailRegex: isEmailValid ? '' : emailErrorMessage,
			message: isMessageNotEmpty ? '' : emptyErrorMessage,
		});

		return isNameNotEmpty && isEmailValid && isMessageNotEmpty;
	};

	useEffect(() => {
		const updateButtonState = () => {
			switch (formState) {
				case 'loading':
					setButtonState('dark:tw-bg-neutral-300 tw-bg-neutral-800');
					setButtonText('Lädt...');
					break;
				case 'success':
					setButtonState('dark:tw-bg-green-600 tw-bg-green-500');
					setButtonText('Gesendet!');
					break;
				case 'error':
					setButtonState('dark:tw-bg-yellow-600 tw-bg-yellow-500');
					setButtonText('Fehler!');
					break;
				case 'userFault':
					setButtonState('tw-bg-red-700');
					setButtonText('Error!');
					break;
				case 'formError':
					setButtonState('dark:tw-bg-orange-700 tw-bg-orange-500');
					setButtonText('Senden');
					break;
				default:
					setButtonState('dark:tw-bg-neutral-100 tw-bg-neutral-900');
					setButtonText('Senden');
					break;
			}
		};

		updateButtonState();
	}, [formState]);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (handleValidation()) {
			setFormState('loading');
			setLoading(true);

			if (emailTries < 5) {
				if (form.current) {
					emailjs
						.sendForm(
							'service_vi6jk3q NIG',
							'template_5uc28rk',
							form.current,
							'LpydiekDkIkldJ7eB',
						)
						.then(
							() => {
								setFormState('success');
								setMessage(
									'Vielen Dank für deine Nachricht. Ich melde mich so schnell wie möglich!',
								);
								setLoading(false);
							},
							(error) => {
								setFormState('error');
								setMessage(
									'Etwas ist schief gelaufen. Bitte versuche es später erneut oder kontaktiere mich über meine E-Mail Addresse.',
								);
								setLoading(false);
							},
						);
				}
			} else {
				setFormState('userFault');
				setMessage(
					'Du hast zu viele E-Mails gesendet. Bitte versuche es später erneut.',
				);
				setLoading(false);
			}
		} else {
			setFormState('formError');
			if (
				!(errors.name || errors.message || errors.email) &&
				errors.emailRegex
			) {
				setMessage('E-Mail Addresse ist nicht gültig.');
			} else {
				setMessage('Bitte fülle alle Felder aus.');
			}
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
							className={`tw-rounded-xl tw-py-2 tw-px-3 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-violet-600 tw-text-black ${loading || formState === 'success' || formState === 'userFault' ? 'tw-bg-neutral-300 dark:tw-bg-neutral-600' : ''}`}
							placeholder={errors.name || 'Max Mustermann'}
							disabled={
								loading ||
								formState === 'success' ||
								formState === 'userFault'
							}
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
							className={`tw-rounded-xl tw-py-2 tw-px-3 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-violet-600 tw-text-black ${loading || formState === 'success' || formState === 'userFault' ? 'tw-bg-neutral-300 dark:tw-bg-neutral-600' : ''}`}
							placeholder={
								errors.email || 'max-mustermann@mail.com'
							}
							disabled={
								loading ||
								formState === 'success' ||
								formState === 'userFault'
							}
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
							className={`tw-rounded-xl tw-py-2 tw-px-3 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-violet-600 tw-text-black ${loading || formState === 'success' || formState === 'userFault' ? 'tw-bg-neutral-300 dark:tw-bg-neutral-600' : ''}`}
							placeholder={
								errors.message ||
								'Hallo Pascal, ich benötige eine Website für...'
							}
							rows={4}
							disabled={
								loading ||
								formState === 'success' ||
								formState === 'userFault'
							}
						></textarea>

						<div className="tw-text-left tw-w-full tw-h-full tw-row-span-1">
							<div className="tw-px-4 tw-flex tw-flex-col tw-text-center">
								<button
									type="submit"
									className={`tw-text-center tw-text-4xl tw-font-bold ${buttonState} tw-p-2 tw-rounded-2xl tw-shadow-lg dark:tw-text-black tw-text-white tw-w-full tw-h-full tw-mt-4 tw-mb-4 tw-transition tw-duration-200 ${!loading && !(formState === 'success' || formState === 'userFault') ? 'hover:tw-scale-105 active:tw-scale-95' : ''}`}
									disabled={
										loading ||
										formState === 'success' ||
										formState === 'userFault'
									}
								>
									{buttonText}
								</button>
								<span>{message}</span>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
