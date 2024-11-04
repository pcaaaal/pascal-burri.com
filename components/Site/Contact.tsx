import React, {useRef, useState, useEffect, FunctionComponent} from 'react';
import emailjs from '@emailjs/browser';

import Image from 'next/image';
import Link from 'next/link';

import gitHubIcon from '/public/icons/logo-github.svg';
import linkedInIcon from '/public/icons/logo-linkedin.svg';

import gitHubIconDark from '/public/icons/logo-github-dark.svg';
import linkedInIconDark from '/public/icons/logo-linkedin-dark.svg';
import {disableInstantTransitions} from 'framer-motion';

interface DarkProps {
	dark: boolean;
}

const Contact: FunctionComponent<DarkProps> = ({dark}) => {
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
		'Deine Daten werden nur für die Kontaktaufnahme verwendet.',
	);

	const isTurnedOn = true;

	const handleEmailTries = () => {
		let tries = 0;

		if (typeof window !== 'undefined') {
			tries = parseInt(
				window.localStorage.getItem('emailTries') || '0',
				10,
			);
			if (tries < 0) {
				tries = 0;
				window.localStorage.setItem('emailTries', tries.toString());
			}
		}

		return {
			get: () => (typeof window !== 'undefined' ? tries : 0),
			add: () => {
				if (typeof window !== 'undefined') {
					tries += 1;
					window.localStorage.setItem('emailTries', tries.toString());
				}
			},
		};
	};

	const emailTries = handleEmailTries();

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

		const validationErrors = {
			name: isNameNotEmpty ? '' : emptyErrorMessage,
			email: isEmailNotEmpty ? '' : emptyErrorMessage,
			emailRegex: isEmailValid ? '' : emailErrorMessage,
			message: isMessageNotEmpty ? '' : emptyErrorMessage,
		};

		setErrors(validationErrors);

		return isNameNotEmpty && isEmailValid && isMessageNotEmpty;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		if (formState === 'formError') {
			handleValidation();
		}
	};

	useEffect(() => {
		const updateButtonState = () => {
			switch (formState) {
				case 'loading':
					setButtonState(
						'dark:tw-bg-neutral-300 tw-bg-neutral-800 dark:tw-text-neutral-900 tw-text-neutral-100',
					);
					setButtonText('Sendet...');
					break;
				case 'success':
					setButtonState(
						'tw-bg-green-600 dark:tw-text-neutral-900 tw-text-neutral-100',
					);
					setButtonText('Gesendet!');
					break;
				case 'error':
					setButtonState(
						'dark:tw-bg-neutral-100 tw-bg-neutral-900 tw-text-red-600',
					);
					setButtonText('Fehler!');
					break;
				case 'userFault':
					setButtonState(
						'tw-bg-red-600 dark:tw-text-neutral-900 tw-text-neutral-100',
					);
					setButtonText('Fehler!');
					break;
				case 'formError':
					setButtonState(
						'dark:tw-bg-neutral-100 tw-bg-neutral-900 dark:tw-text-neutral-900 tw-text-neutral-100',
					);
					setButtonText('Senden');
					break;
				default:
					setButtonState(
						'dark:tw-bg-neutral-100 tw-bg-neutral-900 dark:tw-text-neutral-900 tw-text-neutral-100',
					);
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
			setMessage('Deine Nachricht wird gesendet...');

			if (emailTries.get() < 3) {
				if (isTurnedOn) {
					if (form.current) {
						emailjs
							.sendForm(
								'service_vgyofbi',
								'template_5uc28rk',
								form.current,
								'khkfAe68qv-R8MBhU',
							)
							.then(
								() => {
									emailTries.add();
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
						'Dieses Formular ist aktuell nicht verfügbar. Bitte kontaktiere mich über meine angegebene E-Mail Addresse.',
					);
					setLoading(false);
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

	const disabled =
		loading || formState === 'success' || formState === 'userFault';

	return (
		<div className="tw-w-full tw-flex tw-flex-col tw-items-center">
			<h1 className="text-large tw-font-bold tw-mb-0 tw-mt-6 tw-text-center tw-z-10">
				Kontakt
			</h1>
			<div className="pannel-size tw-z-20 tw-grid lg:tw-grid-cols-3 tw-gap-8">
				<div className="glass-pannel tw-shadow-xl lg:tw-col-span-2 tw-grid">
					<div className="md:tw-grid-cols-2 lg:tw-grid-cols-1 xl:tw-grid-cols-2 tw-grid">
						<div className=" tw-col-span-1 tw-flex tw-flex-col tw-gap-4">
							<div className="">
								<h1 className="text-medium tw-font-bold tw-mb-2">
									Meine Angaben
								</h1>
								<h1 className="text-small">Pascal Burri</h1>
								<h1 className="text-small">
									Frontend und Backend Entwickler
								</h1>
							</div>
							<div className=" tw-justify-between tw-h-full tw-flex tw-flex-col tw-gap-4">
								<div>
									<h1 className="text-medium tw-font-bold tw-mb-2">
										Kontaktdaten
									</h1>
									<Link
										href={'mailto:info@pascal-burri.com'}
										rel="noopener noreferrer"
										target="_blank"
									>
										<h1 className="text-small tw-underline">
											info@pascal-burri.com
										</h1>
									</Link>
								</div>
								<div className="tw-flex tw-gap-8">
									<Link
										href={
											'https://www.linkedin.com/in/pascal-burri-10212429a/'
										}
										rel="noopener noreferrer"
										target="_blank"
									>
										<Image
											width={48}
											height={48}
											src={
												dark
													? linkedInIcon
													: linkedInIconDark
											}
											alt="linkedIn Icon"
											style={{
												maxWidth: '100%',
												height: 'auto',
											}}
										/>
									</Link>
									<Link
										href={'https://github.com/pcaaaal'}
										rel="noopener noreferrer"
										target="_blank"
									>
										<Image
											width={48}
											height={48}
											src={
												dark
													? gitHubIcon
													: gitHubIconDark
											}
											alt="GitHub Icon"
											style={{
												maxWidth: '100%',
												height: 'auto',
											}}
										/>
									</Link>
								</div>
							</div>
						</div>
						<div className="md:tw-col-span-1 md:tw-flex tw-hidden lg:tw-hidden xl:tw-flex tw-relative">
							<Image
								className=""
								src={'/illustrations/email.webp'}
								alt="Envelope"
								fill
								sizes="100vw"
								style={{
									objectFit: 'contain',
								}}
							/>
						</div>
					</div>
				</div>
				<div className="glass-pannel tw-shadow-xl lg:tw-col-span-1 tw-self-center tw-grid tw-grid-rows-5">
					<div className="tw-row-span-1">
						<h1 className="text-large tw-font-bold tw-text-left">
							Formular
						</h1>
					</div>
					<div className="tw-text-left tw-w-full tw-h-full tw-row-span-4">
						<form
							className="tw-flex tw-flex-col tw-gap-2"
							onSubmit={sendEmail}
							ref={form}
						>
							<input
								type="text"
								name="user_name"
								placeholder="Dein Name"
								disabled={disabled}
								className={`tw-placeholder-gray-400  focus:tw-outline-none focus:tw-ring-2 tw-bg-neutral-100 ${disabled ? 'tw-bg-neutral-300 dark:tw-bg-neutral-500 tw-cursor-not-allowed' : ''} tw-text-neutral-900 tw-rounded-xl tw-py-2 tw-px-3 ${
									errors.name
										? 'tw-ring-red-600 dark:tw-ring-red-500 tw-ring-1'
										: 'focus:tw-ring-violet-600 dark:focus:tw-ring-violet-500'
								}`}
								onChange={handleChange}
							/>
							{errors.name && (
								<p className="tw-text-red-600 dark:tw-text-red-500 tw-text-sm -tw-mt-1">
									{errors.name}
								</p>
							)}
							<input
								type="text"
								name="user_email"
								placeholder="Deine E-Mail"
								disabled={disabled}
								className={`tw-placeholder-gray-400  focus:tw-outline-none focus:tw-ring-2 tw-bg-neutral-100 ${disabled ? 'tw-bg-neutral-300 dark:tw-bg-neutral-500 tw-cursor-not-allowed' : ''} tw-text-neutral-900 tw-rounded-xl tw-py-2 tw-px-3 ${
									errors.email || errors.emailRegex
										? 'tw-ring-red-600 dark:tw-ring-red-500 tw-ring-1'
										: 'focus:tw-ring-violet-600 dark:focus:tw-ring-violet-500'
								}`}
								onChange={handleChange}
							/>
							{errors.email && (
								<p className="tw-text-red-600 dark:tw-text-red-500 tw-text-sm -tw-mt-1">
									{errors.email}
								</p>
							)}
							{errors.emailRegex && (
								<p className="tw-text-red-600 dark:tw-text-red-500 tw-text-sm -tw-mt-1">
									{errors.emailRegex}
								</p>
							)}
							<textarea
								name="message"
								placeholder="Deine Nachricht"
								disabled={disabled}
								className={`tw-placeholder-gray-400  focus:tw-outline-none focus:tw-ring-2 tw-bg-neutral-100 ${disabled ? 'tw-bg-neutral-300 dark:tw-bg-neutral-500 tw-cursor-not-allowed' : ''} tw-text-neutral-900 tw-rounded-xl tw-py-2 tw-px-3 ${
									errors.message
										? 'tw-ring-red-600 dark:tw-ring-red-500 tw-ring-1'
										: 'focus:tw-ring-violet-600 dark:focus:tw-ring-violet-500'
								}`}
								onChange={handleChange}
							/>
							{errors.message && (
								<span className="tw-text-red-600 dark:tw-text-red-500 tw-text-sm -tw-mt-1">
									{errors.message}
								</span>
							)}
							<div className="tw-px-4 tw-flex tw-flex-col tw-text-center">
								<button
									type="submit"
									className={`${buttonState} tw-text-center text-medium tw-font-bold tw-p-2 tw-rounded-2xl tw-shadow-lg tw-w-full tw-h-full tw-my-4 tw-transition tw-duration-200 ${!loading && !(formState === 'success' || formState === 'userFault') ? 'hover:tw-scale-[1.02] active:tw-scale-95 hover:tw-bg-neutral-800 hover:dark:tw-bg-white' : 'tw-cursor-not-allowed'}`}
									disabled={disabled}
								>
									{buttonText}
								</button>
								<span>{message}</span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
